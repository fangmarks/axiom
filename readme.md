# Axiom by [Lio](https://himbo.cat)

Axiom is a (currently) very simple blog backed by Notion.

It's based on on Splitbee's [React-Notion-Blog](https://github.com/splitbee/react-notion-blog) Template but very customized for **my** needs.



# How to use

Axiom is made with Vercel in mind, so you'll need [npm/vercel](https://npm.im/vercel) installed globally as well as an Account on their Service.

After that, [duplicate this Notion Table](https://www.notion.so/36422d8e13ef4967920b3064082b497e?v=7c778d4058344725875a50e444797df4) and make sure that it's set to public


Copy your Table's ID, i.e. the random string of characters after the `/` until the `?`.

Open Vercel's Environment Variables Page and add the ID of your blog as a Variable with the name `NOTION_BLOG_ID` and `BLOG_NAME` with the name you want to give your blog.

Then simply run `vercel` in your terminal to get it up onto Vercel


# Writing Entries (important note)

I haven't personally found out how to sort blog entries properly, so for now you'll have to manually assign each new post a unique number within the `place` field on the Notion Table.
Posts are sorted in a descending fashion for now, you're welcome to open a PR and implement proper date sorting. 


## Develop Locally

```bash
# might require sudo if you do it locally
$ npm i -g vercel@latest
$ git clone https://github.com/hokkqi/axiom.git
$ cd axiom
# or yarn
$ npm i
$ vercel dev
```
