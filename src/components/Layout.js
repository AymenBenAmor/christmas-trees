import * as React from 'react';

const Layout = ({title = 'Welcome to our christmas tree!', description = 'Ready to find your gift?', children}) => {
  return (
    <main className="flex-col">
      <header className="flex flex-col justify-center align-center text-center">
        <h1 className="font-serif text-5xl m-10">
          {title}
        </h1>
        <p className="m-5 text-xl">
          {description}
        </p>
      </header>
      <article>
        {children}
      </article>
    </main>
  )
}

export default Layout;
