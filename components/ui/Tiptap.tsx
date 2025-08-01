'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar';
import Heading from '@tiptap/extension-heading'
import { BulletList } from '@tiptap/extension-list';

const Tiptap = ({description, onChange}:{description:string, onChange:(richtext:string)=>void}) => {
  const editor = useEditor({
    extensions: [StarterKit, BulletList.configure({
       HTMLAttributes:{
        class: 'list-disc px-3'
       },
    
      itemTypeName:'listItem'
    }), Heading.configure({
      HTMLAttributes:{
        class: 'text-xl font-bold',
        levels:[2]
      }
    })],
    content: 'description',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps:{
      attributes:{
        class: 'min-h-[150px]  p-3'
      }
    },
    onUpdate({editor}) {
      onChange(editor.getHTML())
      console.log(editor.getHTML())
    },
  })

  return <div className='flex flex-col min-h-[250px]'><Toolbar editor={editor}/><EditorContent editor={editor}/></div>
}

export default Tiptap