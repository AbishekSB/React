// import { fireEvent, render, screen } from '@testing-library/react';
// import InsertApplicant from './InsertApplicant';



// test('renders learn react link', () => {
//   render(<InsertApplicant />);
//   const linkElement = screen.getByPlaceholderText("Please enter your First name *");
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders learn react link', () => {
//     render(<InsertApplicant />);
//     const linkElement = screen.getByPlaceholderText("Please enter the City *");
//     expect(linkElement).toBeInTheDocument();
//   });

//   test('renders learn react link', () => {
//     render(<InsertApplicant />);
//     const linkElement = screen.getByPlaceholderText("Enter the age *");
//     expect(linkElement).toBeInTheDocument();
//   }); 
  
//   test('renders learn react link', () => {
//     render(<InsertApplicant />);
//     const linkElement = screen.getByPlaceholderText("Enter the Gender *");
//     expect(linkElement).toBeInTheDocument();
//   }); 
//   test('renders learn react link', () => {
//     render(<InsertApplicant />);
//     const linkElement = screen.getByPlaceholderText("Enter the degree *");
//     expect(linkElement).toBeInTheDocument();
//   }); 
//   test('renders learn react link', () => {
//     render(<InsertApplicant />);
//     const linkElement = screen.getByPlaceholderText("Enter the yearOfGraduation *");
//     expect(linkElement).toBeInTheDocument();
//   }); 

//   test('renders learn react link', () => {
//     render(<InsertApplicant />);
//     const linkElement = screen.getByPlaceholderText("Enter Your Department");
//     expect(linkElement).toBeInTheDocument();
//   }); 

// it("renders 'applicantName input field' ", () => {
//     render(<InsertApplicant />);
//      const linkElement = screen.getByRole("applicantName");
//      expect(linkElement).toBeInTheDocument();
//      expect(linkElement).toHaveTextContent("");
//     });

// it("renders 'applicantCity input field' ", () => {
//   render(<InsertApplicant />);
//   const linkElement = screen.getByRole("applicantCity");
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveTextContent("");
// });

// it("renders 'age input field' ", () => {
//   render(<InsertApplicant />);
//   const linkElement = screen.getByRole("age");
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveTextContent("");
// });

// it("renders 'gender input field' ", () => {
//   render(<InsertApplicant />);
//   const linkElement = screen.getByRole("gender");
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveTextContent("");
// });

// it("renders 'degree input field' ", () => {
//   render(<InsertApplicant />);
//   const linkElement = screen.getByRole("degree");
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveTextContent("");
// });

// it("renders 'year of graduation input field' ", () => {
//     render(<InsertApplicant />);
//     const linkElement = screen.getByRole("grad");
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent("");
//   });


// it('calls onSubmit when the submit button is clicked', async () => {
//   const onSubmit = jest.fn();
//   const { getByTestId } = render(<InsertApplicant onSubmit={onSubmit} />);

//   const submitButton = getByTestId('submit-button');
 

//   fireEvent.click(submitButton);


//   expect(onSubmit).toHaveBeenCalledTimes(0);
// });








