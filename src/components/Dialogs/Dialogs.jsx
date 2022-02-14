import classes from "./Dialogs.module.css"

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>

                <div className={classes.dialogsItems}>
                    <div className={classes.dialog}>
                        Стамеска
                    </div>
                    <div className={classes.dialog}>
                        Полено
                    </div>
                    <div className={classes.dialog}>
                        Посыпка
                    </div>
                </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}> wqe</div>
                <div className={classes.message}>ewqeq</div>
            </div>
        </div>
    )
}

export default Dialogs
