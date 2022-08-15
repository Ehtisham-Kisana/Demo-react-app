import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Props from './usingProps';
const main = {
    background: 'green',
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
<div style = {main} >
<Header />
< About />
<Props name="Ehtisham" job="developer" />
</div>
<Props name="Saad" job="junior developer" />
<Props name="Usama" job="Senior developer" />


</>
);

