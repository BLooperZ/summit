import React, {Component} from 'react'
import TinyMCE from 'react-tinymce'

class Editor extends Component {
    handleEditorChange () {
        console.log('saved!')
    }
    render () {
        return (
            <TinyMCE
                content="<p>This is the initial content of the editor</p>"
                config={{
                theme: 'inlite',
                plugins: 'image table link paste contextmenu textpattern autolink',
                insert_toolbar: 'quickimage quicktable',
                selection_toolbar: 'bold italic | alignleft aligncenter alignright alignjustify | quicklink h2 h3 blockquote',
                inline: true,
                paste_data_images: true,
                content_css: [
                    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                    '//www.tinymce.com/css/codepen.min.css']
                }}
                onChange={this.handleEditorChange}
            />
        )
    }
}

export default Editor
