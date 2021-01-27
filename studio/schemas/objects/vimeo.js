import React from 'react'
import urlParser from "js-video-url-parser/lib/base";
import "js-video-url-parser/lib/provider/vimeo";
import Vimeo from '@u-wave/react-vimeo';


const Preview = ({value}) => {
	  const { url } = value
    const video = urlParser.parse(url);
    const id = video?.id
	return (<Vimeo video={id} />)
}

export default {
    name: 'vimeo',
    type: 'object',
    title: 'Vimeo Embed',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'Vimeo video URL'
      }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
  }