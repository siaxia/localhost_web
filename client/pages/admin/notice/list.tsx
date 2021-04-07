import { GetStaticProps } from 'next';
import { Notice } from '../../../interfaces';
import React from 'react';
import Layout from '../../../components/main/Layout';
import NoticeList from '../../../components/admin/notice/NoticeList';
import axios from 'axios';
import SERVER from '../../../utils/url';

type Props = {
  pageProps: {
    items: Notice[];
  };
};

const list = ({ pageProps }: Props) => {
  return (
    <Layout title='공지목록 | localhost'>
      <NoticeList {...pageProps} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Notice[] = await (await axios.get(`${SERVER}/api/notice/list`))
    .data.notices;
  return { props: { items } };
};

export default list;