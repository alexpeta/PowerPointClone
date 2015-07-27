﻿///<reference path="../lib/_references.d.ts"/>

import React = require('react/addons');

class LeftSidePanel extends React.Component<any, any, any>
{
    changeLayoutClickHandler(slideType): void {
        this.props.changeLayoutClick(slideType);
     }
    
    render() {

        var imageStyling = {
            width: "150px",
            height: "80px",
            position: "relative",
            left: "0px"
        }

        return React.jsx(`
            <div className="panel">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="header">
                            Layouts
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="slide-base center-block space-top10 space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,'TitleOnly')}>
                            <div className="title-placeholder center-block space-top55"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="slide-base center-block space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,'TitleWithText')}>
                            <div className="title-placeholder center-block space-top10"></div>
                            <div className="text-body-placeholder center-block space-top10"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="slide-base center-block space-bottom20" onClick={this.changeLayoutClickHandler.bind(this,'TitleWithImage')}>
                            <div className="title-placeholder center-block space-top10"></div>
                            <div className="text-body-placeholder center-block space-top10">
                                <img src="http://placekitten.com/g/150/80" title="Image" style={imageStyling}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }
}


export = LeftSidePanel;