import jss from 'jss'
import preset from 'jss-preset-default'
import 'reset-css'

jss.setup(preset())

const styles = {
    item: {
        width: '418px',
        minHeight: '142px',
        border: '1px solid #f4f4f4',
        boxSizing: 'border-box',
        margin: '0 auto 20px',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
    },
    description: { 
        padding: '20px 13px',
        boxSizing: 'border-box',
        wordWrap: 'break-word',
    },
    executor: {
        padding: '0 13px 30px',
    },
    priority: {
        padding: '0 13px',
        marginBottom: '20px',
        boxSizing: 'border-box',
        display: 'inline-block',
    },
    button: {
        padding: '10px 5px',
        marginLeft: '4px',
        marginBottom: '9px',
        boxSizing: 'border-box',
        backgroundColor: '#f4f4f4',
        border: 'none',
        color: '#000000',
        cursor: 'pointer', 
    },
    buttonAll: {
        display: 'inline-block',
        float: 'right',
        marginRight: '10px',
        transform: 'translateY(-10px)',
    }
    
}

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;