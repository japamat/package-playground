import React from 'react';
import { useEffect } from 'react';

const Ajv = props => {
  useEffect(() => {
    
  })

  return (
    <div className="centered-div">
      <p className="home-btn" onClick={() => props.changeView('home')} >home</p>
      <h3>Ajv</h3>
      <p>Use Ajv to validate jason schemas in the console</p>
      <div className="block-div">
        <code>
          {`>`} const ajv = new Ajv();
        </code>
        <code>
          {`>`} const schema = {`{`}
        </code>
        <code>
            {`\xa0\xa0\xa0\xa0`}type: "object",
        </code>
        <code>
            {`\xa0\xa0\xa0\xa0`}properties: {`{`}
        </code>
        <code>
            {`\xa0\xa0\xa0\xa0\xa0\xa0`}foo: {`{`}type: "integer"{`}`},
        </code>
        <code>
            {`\xa0\xa0\xa0\xa0`}{`}`},
        </code>
        <code>
            {`\xa0\xa0\xa0\xa0`}required: ["foo"],
        </code>
        <code>
            {`\xa0\xa0\xa0\xa0`}additionalProperties: false
        </code>
        <code>
            {`\xa0\xa0`}{`}`};
        </code>
        <div style={{marginBottom:'1rem'}} />
        <code>
          {`>`} const data = {`{`}
        </code>
        <code>
            {`\xa0\xa0\xa0\xa0`}foo: 1,
        </code>
        <code>
            {`\xa0\xa0`}{`}`};
        </code>
        <div style={{marginBottom:'1rem'}} />
        <code>
          {`>`} const data = {`{`}foo: 1{`}`};
        </code>
        <code>
          {`>`} const valid = ajv.validate(schema, data);
        </code>
        <code>
          {`>`} true
        </code>


        {/* const schema = {
    bar: {type: "string"}
  },
  
  additionalProperties: false
} */}
        <code>
          {`>`} true
        </code>
      </div>
    </div>
  );
}

export default Ajv;
