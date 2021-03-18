import { GetStaticProps } from 'next';
import Link from 'next/link';

import { User } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/main/Layout';
import List from '../../components/user/List';

type Props = {
	pageProps: {
		items: User[];
	};
};

const WithStaticProps = ({ pageProps }: Props) => (
	<Layout title="Users List | PlanBee🐝">
		<h1>Users List</h1>
		<p>
			Example fetching data from inside <code>getStaticProps()</code>.
		</p>
		<p>You are currently on: /users</p>
		<List items={pageProps.items} />
		<p>
			<Link href="/">
				<a>Go home</a>
			</Link>
		</p>
	</Layout>
);

export const getStaticProps: GetStaticProps = async () => {
	// Example for including static props in a Next.js function component page.
	// Don't forget to include the respective types for any props passed into
	// the component.
	const items: User[] = sampleUserData;
	return { props: { items } };
};

export default WithStaticProps;