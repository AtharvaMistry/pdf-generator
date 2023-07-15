import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';//for generating PDF
import pdfFonts from 'pdfmake/build/vfs_fonts';//for font style in pdf
import './App.css';
// import RobotoRegular from './Roboto-Regular.ttf';


// pdfFonts.addFont(RobotoRegular);



pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App(){
	function handleFormSubmit(event){
        event.preventDefault();
		const {name, profession, mobile, email,address, linkedIn,profile, skills, companyName,years,role,university,field,yearOfEDucation,result} = event.target;

		const documentMaking = {
			content: [
				// { text:`Name: ${name.value}`},
				// { text:`Profession:${profession.value}`},
				{ text:`RESUME`, fontSize:24, alignment:'center',color:'#EEA47F', margin: [0, 0, 0, 10],decoration:'underline',background:'#fcece3'},
				{
					columns: [
					  { text: 'Name:', width: 'auto', margin: [0, 0, 100, 0] },
					  { text: name.value, width: 'auto',color:'#00539C', margin: [10, 0, 100, 20] }, // Add left margin
					//   { text: 'Profession:', width: 'auto', margin: [20, 0, 0, 0] }, // Add left margin
					  { text: profession.value,color:'#00539C', width: 'auto',margin: [40, 0, 0, 20]},
					],
				  },

				  //contact details
				  { text:`Contact details:`, fontSize:18, alignment:'center',color:'#EEA47F',margin: [0, 0, 0, 10],decoration:'underline',background:'#fcece3'},
				  {
					columns:[
						{ text: 'Mobile:', width: 'auto',margin: [0, 0, 105, 0]},
						{ text: mobile.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'Email:', width: 'auto',margin: [0, 0, 112, 0]},
						{ text: email.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'Address:', width: 'auto',margin: [0, 0, 98, 0]},
						{ text: address.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'LinkedIn:', width: 'auto',margin: [0, 0, 97, 0]},
						{ text: linkedIn.value, width: 'auto',color:'#00539C'},
					]
				  },

				  //profile
				  {
					columns:[
						{ text: 'Profile:', width: 'auto',margin: [0, 0, 108, 0]},
						{ text: profile.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'Skills:', width: 'auto',margin: [0, 0, 112, 0]},
						{ text: skills.value, width: 'auto',color:'#00539C'},
					]
				  },

				//experience 
				{ text:`Experience:`, width: 'auto', fontSize:18, alignment:'center',color:'#EEA47F' ,margin: [0, 10, 0,5],decoration:'underline',background:'#fcece3'},
				{
					columns:[
						{ text: 'CompanyName:', width: 'auto',margin: [0, 0, 60, 0]},
						{ text: companyName.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'Years:', width: 'auto',margin: [0, 0, 113, 0]},
						{ text: years.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'Role:', width: 'auto',margin: [0, 0, 118, 0] },
						{ text: role.value, width: 'auto',color:'#00539C'},
					]
				  },

				//education
				{ text:`Education:`, width: 'auto', fontSize:18, alignment:'center',color:'#EEA47F'  ,margin: [0, 10, 0,5],decoration:'underline',background:'#fcece3'},
				{
					columns:[
						{ text: 'University:', width: 'auto',margin: [0, 0, 90, 0]},
						{ text: university.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'Field of Experience:', width: 'auto',margin: [0, 0, 40, 0]},
						{ text: field.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'Year of Education:', width: 'auto',margin: [0, 0, 47, 0]},
						{ text: yearOfEDucation.value, width: 'auto',color:'#00539C'},
					]
				  },
				  {
					columns:[
						{ text: 'Result:', width: 'auto',margin: [0, 0, 108, 0]},
						{ text: result.value, width: 'auto',color:'#00539C'},
					]
				  },

			],
		
		}
		const PDFgenerator = pdfMake.createPdf(documentMaking);
		PDFgenerator.open();
	}

  
    return (
      <div>
			<form className='container' onSubmit={handleFormSubmit}>
				<h1>Resume Generator</h1><br/><br/>

				<div className='div1'>
					<label className='label'>Name:</label>
					<input type="text" name='name' />
				</div><br/>

				<div className='div1'>
					<label className='label'>Profession:</label>
					<input type="text" name='profession'/>
				</div><br/>

			<div className='div1'>
				<label className='label'>Contact details:</label>
				<div>
					<input type="text" placeholder='mobile-number' name='mobile'/><br/><br/>
					<input type="text" placeholder='email' name='email'/><br/><br/>
					<input type="text" placeholder='address' name='address'/><br/><br/>
					<input type="text" placeholder='linkedIn' name='linkedIn'/><br/><br/>
				</div>
			</div><br/>


				<div className='div1'>
					<label className='label'>Profile:</label>
					<input type="text" name='profile'/>
				</div><br/>

				<div className='div1'>
					<label className='label'>Skills:</label>
					<input type="text" name='skills'/>
				</div><br/>

				<div className='div1'>
					<label className='label'>Experience:</label>
					<div>
						<input type="text" placeholder='company-name' name='companyName'/><br/><br/>
						<input type="text" placeholder='number-of-year' name='years'/><br/><br/>
						<input type="text" placeholder='role' name='role'/><br/><br/><br/>
					</div>
				</div><br/>

				<div className='div1'>
					<label className='label'>Education:</label>
					<div>
						<input type="text" placeholder='university' name='university'/><br/><br/>
						<input type="text" placeholder='field' name='field'/><br/><br/>
						<input type="text" placeholder='year' name='yearOfEDucation'/><br/><br/>
						<input type="text" placeholder='result' name='result'/><br/><br/>
					</div>
				</div><br/>

				<div className='button1'> 
					<button type="submit">Generate PDF</button><br/>
				</div>

			</form>
      </div>
    );
  
}

export default App;
