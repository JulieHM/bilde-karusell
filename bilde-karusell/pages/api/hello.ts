// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf24e0075cmshdf8bc79ebabea44p189fd1jsnb2e24db20dcf',
		'X-RapidAPI-Host': 'unsplash-data.p.rapidapi.com'
	}
};

fetch('https://unsplash-data.p.rapidapi.com/search/collections?query=cars&per_page=20&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
