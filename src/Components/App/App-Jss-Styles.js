import jss from 'jss'
import preset from 'jss-preset-default'
import 'reset-css'

jss.setup(preset())

const styles = {
    wrapper: {
        width: '418px',
        height: '268px',
        border: '1px solid #f4f4f4',
        padding: '5px',
        margin: '0 auto 40px;',
        boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
        boxSizing: 'border-box'
    },
    formControl: {
        minHeight: '140px',
        width: "400px",
        resize: 'none',
        margin: '0 auto',
        border: 'none',
        padding: '5px',
        display: 'block',
        boxSizing: 'border-box'
    },
    customSelect: {
        width: '400px',
        height: '32px',
        display: 'block',
        margin: '0 auto',
        boxSizing: 'border-box',
        marginBottom: '8px'
    },
    formControlInput: {
        display: 'block',
        width: '400px',
        height: '32px',
        margin: '0 auto',
        boxSizing: 'border-box',
        padding: '4px',
        marginBottom: '8px'
    },
    btnPrimary: {
        display: 'block',
        width: '400px',
        height: '32px',
        margin: '0 auto',
        boxSizing: 'border-box',
        backgroundColor: '#f4f4f4',
        border: 'none',
        color: '#000000',
        cursor: 'pointer',
    },
    container: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '25px',
        width: '530px',
        margin: '24px auto',
    }
}

const { classes } = jss.createStyleSheet(styles).attach();

export default classes;