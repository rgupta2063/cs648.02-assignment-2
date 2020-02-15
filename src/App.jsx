class ProductInventory extends React.Component{
    constructor(){
        super();
        this.state ={products:[]};  
        this.createProduct = this.createProduct.bind(this);
    }
    
    componentDidMount() {
        this.loadData();
    }
    
    loadData(){
        setTimeout(() => {
            this.setState({ products: initialproducts });
        }, 500);
    }

    createProduct(product) {
        const newproductList = this.state.products.slice();
        newproductList.push(product);
        this.setState({ products: newproductList });
      }
    render(){
        return(
            <React.Fragment>
            <h1>My Company Inventory</h1>
            {/* <ProductDisplay/>
            <hr/> */}
            <ProductTable products={this.state.products}/>
            
            <ProductAdd createProduct={this.createProduct}/>
            </React.Fragment>
        );
    }
}

// class ProductDisplay extends React.Component{
//     render(){
//         return(
            
//         );
//     }
// }


const initialproducts = [];


// class ProductTable extends React.Component{
    
//     render(){  
function ProductTable(props){
        const productRows = props.products.map((product,index)=><ProductRow key={index} product={product}/>);
        return(
        <div>  
            <p>Showing all available products</p>
            <hr/>
            <table className="bordered-table"> 
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
                
            </table>
            </div>      
        );
    }
// }

// class ProductRow extends React.Component{

//     render(){
function ProductRow(props){        
        const product = props.product;
        return(
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                    <a href={product.image} target="_blank">View</a>
                </td>
            </tr>
        );
    }
// }

class ProductAdd extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const form = document.forms.productAdd;
        const product = {category:form.category.value, price:form.price.value,
                        name:form.name.value, image:form.image.value}
        this.props.createProduct(product);
        form.price.value="", form.name.value="",form.image.value="",form.category.value="";
    }
    render(){
        return(
            <div>
                <p>Add a new product to inventory</p>
                <hr/>
                <form name='productAdd' onSubmit={this.handleSubmit}> 
                    <div className="form-container">
                        <div className="form-col">
                            Category<br/>
                            <select name='category' className="category">
                                <option value='shirt'>Shirt</option>
                                <option value='Jeans'>Jeans</option>
                                <option value='Jackets'>Jackets</option>
                                <option value='sweaters'>Sweaters</option>
                                <option value='accessories'>Accessories</option>
                            </select>
                            <br/>
                            Product Name<br/>
                            <input type='text' name='name'/>
                        </div> 
                        <div className="form-col"> 
                            Price Per Unit <br/>
                            <input type='text' name='price'/>
                            <br/>                  
                            Image URL<br/>
                            <input type='url' name='image'/>
                        </div>  
                    </div>    
                    <button>Add Product</button>
            
                </form>
            </div> 
        );
    }
}

const element = <ProductInventory/>;
ReactDOM.render(element,document.getElementById('contents'));