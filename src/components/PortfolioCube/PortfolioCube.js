import Aux from '../../containers/hoc/Auxiliary';

import classes from './PortfolioCube.module.css';

const PortfolioCube = () => {
    return (
        <div className={classes.PortfolioCube}>
            <div className={classes.Background}></div>
            <div className={classes.Title}>
                <h1 className={'font-limelight'}>Coming Soon...</h1>         
            </div>
        </div>
    );
}

export default PortfolioCube;