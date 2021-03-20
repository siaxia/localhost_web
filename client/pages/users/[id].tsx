import { GetStaticProps, GetStaticPaths } from 'next';

import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/main/Layout';
import ListDetail from '../../components/user/ListDetail';
import axios from 'axios';
import SERVER from '../../utils/url';

type Props = {
	pageProps: {
		item?: User;
		isFollowed: boolean;
		errors?: string;
	};
};

const StaticPropsDetail = ({ pageProps }: Props) => {
	if (pageProps.errors) {
		return (
			<Layout title="Error | PlanBee🐝">
				<p>
					<span style={{ color: 'red' }}>Error:</span> {pageProps.errors}
				</p>
			</Layout>
		);
	}

	return (
		<Layout
			title={`${
				pageProps.item ? pageProps.item.name : 'User Detail'
			} | localhost`}
		>
			{pageProps.item && (
				<ListDetail item={pageProps.item} isFollowed={pageProps.isFollowed} />
			)}
		</Layout>
	);
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
	// Get the paths we want to pre-render based on users
	const paths = await (
		await axios.get(`${SERVER}/api/user/list`)
	).data.users.map((user) => ({
		params: { id: user.id.toString() },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = params?.id;
		const item = await (await axios.get(`${SERVER}/api/user/${id}`)).data.user;
		const isFollowed = await (
			await axios.post(`${SERVER}/api/user/follow_check`, {
				userId: id,
				followerId: 12,
			})
		).data.isFollowed;
		// By returning { props: item }, the StaticPropsDetail component
		// will receive `item` as a prop at build time
		return { props: { item, isFollowed } };
	} catch (err) {
		return { props: { errors: err.message } };
	}
};
