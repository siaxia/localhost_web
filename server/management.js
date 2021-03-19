const { DataUsage } = require('@material-ui/icons');
const crypto = require('crypto');
const mysql = require('./db/mysql');
const { password } = require('./db/password');

module.exports.login = (req, res) => {
	// 로그인

	const email = req.body.email || req.query.email;
	const pw = req.body.pw || req.query.pw;
	const sql = `SELECT * FROM user WHERE email = ?`;
	const hashPW = crypto.createHash('sha512').update(pw).digest('hex');

	if (email == null || pw == null)
		return console.log('아이디 혹은 비밀번호가 없습니다');

	mysql.query(sql, email, (err2, rows, fields) => {
		if (err2) return console.log('err2: ', err2);
		if (rows == '') {
			res.send({ success: false, message: '등록되지 않은 이메일 입니다.' });
		} else {
			if (hashPW === rows[0].pw) {
				res.status(200).send({ success: true, message: '로그인 성공' });
			} else {
				res.send({ success: false, message: '비밀번호가 틀립니다.' });
			}
		}
	});
};

module.exports.register = (req, res) => {
	// 회원가입
	const email = req.body.email || req.query.email;
	const pw = req.body.pw || req.query.pw;
	const name = req.body.name || req.query.name;
	const sex = req.body.sex || req.query.sex;
	const nickname = req.body.nickname || req.query.nickname;
	const phone = req.body.phone || req.query.phone;
	const address = req.body.address || req.query.address;
	const sql = `SELECT * FROM user WHERE email = ?`;
	const hashPW = crypto.createHash('sha512').update(pw).digest('hex');

	if (email == null) return console.log('아이디를 입력하세요');

	mysql.query(sql, email, (err2, rows, fields) => {
		if (err2) return console.log('register err: ', err2);

		if (rows == '') {
			// res.send({ message: '사용할 수 있는 이메일입니다.' });
			const insert = `INSERT INTO user(email, pw, name, sex, nickname, phone, address) VALUES("${email}", "${hashPW}", "${name}", "${sex}", "${nickname}", "${phone}", "${address}");`;

			mysql.query(insert, (err3, rows, fields) => {
				if (err3) return console.log('err3: ', err3);

				console.log('계정 생성 성공');
			});
			res.send({ success: true, message: '회원가입 완료' });
		} else {
			res.send({ success: false, message: '이미 등록 된 이메일입니다.' });
		}
	});
};

module.exports.update = (req, res) => {
	// 정보수정
	const email = req.body.email || req.query.email;
	const pw = req.body.pw || null;
	const phone = req.body.phone || null;
	const address = req.body.address || null;
	
	const sql = `SELECT * FROM user WHERE email = ?`;

	mysql.query(sql, email, (err, rows, fields) => {
		if (err) return console.log("여기서 err", err);

		if(pw !== null){
			const hashPW = crypto.createHash('sha512').update(pw).digest('hex');
			updateData(hashPW, "pw");
		}else if (phone !== null) {
			updateData(phone, "phone");
		}else if (address !== null) {
			updateData(address, "address");
		}

		function updateData(data, type){
			const update = `UPDATE user SET ${type} = "${data}" WHERE user_id = "${rows[0].user_id}";`

			mysql.query(update, (err, rows2, field2) => {
				if (err) return console.log(err);
				console.log("변경 성공");
				res.send({ message: "변경 대성공" })
			})
		}
	})
};

