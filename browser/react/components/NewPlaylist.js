import React from 'react';

const NewPlaylist = (props) => {
    return (
        <div className="well">
            <form onSubmit={ props.handleSubmit } className="form-horizontal">
                <fieldset>
                <legend>New Playlist</legend>
                { props.inputTooLong 
                    ?
                    <div className="alert alert-warning">Please enter a playlist name with fewer than 16 characters</div> 
                    :
                    null
                }
                {
                    props.inputTooShort ?
                    <div className="alert alert-warning">Please enter a playlist name with at least one character</div>
                    :
                    null
                }
                <div className="form-group">
                    <label className="col-xs-2 control-label">Name</label>
                    <div className="col-xs-10">
                    <input onChange={ props.handleChange } value={ props.inputValue } className="form-control" type="text"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-10 col-xs-offset-2">
                    <button disabled={props.buttonDisabled} type="submit" className="btn btn-success">Create Playlist</button>
                    </div>
                </div>
                </fieldset>
            </form>
        </div>
    )
}

export default NewPlaylist;