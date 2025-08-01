"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z  from 'zod'
import { Input } from "@/components/ui/input";
import {zodResolver} from '@hookform/resolvers/zod'
import  { useForm }  from "react-hook-form";
import { Button } from "@/components/ui/button";
import Tiptap from "@/components/ui/Tiptap";
export default function Home() {
   
  const formSchema = z.object({
    title: z.string().min(5, {message: 'hey title is not long enoug'}).max(500, {message: 'Title to long'}),
    price:z.number().min(5, {message: 'Price should not less than five'}),
    description: z.string().min(5, {message: 'hey title is not long enoug'}).trim()
  })
  const form =  useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode:"onChange",
    defaultValues:{
      title:'',
      price: 29.90,
      description:''
    }
  })

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
       <Form {...form}>
        <form>
            <FormField control={form.control} name="title" render={({field})=>(
              <><FormItem>
                <FormLabel>title</FormLabel>
                <FormControl>
                  <Input className="mb-4" placeholder="main title of product" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
                </>  
  )}/>
             <FormField control={form.control} name="description" render={({field})=>(
             <FormItem>
                  <FormLabel>description</FormLabel>
                  <FormControl>
                    <Tiptap description={field.name} onChange={field.onChange}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
      
  )}/>
            <Button type="submit" className="my-4">submit</Button>
           </form> 
       </Form>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
