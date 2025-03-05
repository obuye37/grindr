import { createBucketClient } from "@cosmicjs/sdk"

const cosmic = createBucketClient({
    bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG ?? '',
    readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY ?? '',
    writeKey: process.env.NEXT_PUBLIC_COSMIC_WRITE_KEY,
  });

  export interface Page {
    id: string;
    type: string;
    slug: string;
    title: string;
    metadata: {
      content: string;
      description: string;
      url: string;
    };
    created_at: string;
    thumbnail: string
  }

const  getPages = async (dataArgs:string):Promise<Page[]> => {
  const data = await cosmic.objects
    .find({
      type: dataArgs,
    })
    .props('id,slug,title,metadata,thumbnail')
    .depth(1);

  const dataArr: Page[] = await data.objects;
  return dataArr.reverse();
}

export default getPages