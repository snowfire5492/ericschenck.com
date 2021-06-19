
import classes from './Layout.module.css';


function Layout(props) {

   
    return(
        <div className={classes.Wrapper}>      
            <div className={classes.Layout}>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;

