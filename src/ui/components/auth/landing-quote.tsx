export default function LandingQuote() {
  return (
    <aside className='bg-slate-200 lg:flex items-center justify-center p-8 pl-14 hidden'>
      <div className='max-w-lg '>
        <blockquote className='text-2xl font-bold mb-2 before:content-[open-quote] after:content-[close-quote] after:text-3xl after:absolute after:inline-block after:-mt-0.5 after:ml-1 before:absolute before:top-[-4px] before:left-[-1rem] relative before:text-3xl '>
          The customer service I received was exceptional. The support team went
          above and beyond to address my concerns.
        </blockquote>
        <p className='font-semibold'>Jules Winnfield</p>
        <p className='text-slate-500 text-sm'>CEO, Acme Inc</p>
      </div>
    </aside>
  );
}
