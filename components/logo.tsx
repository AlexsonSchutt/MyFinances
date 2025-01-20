import React, { Component } from 'react';
import { Image, ImageStyle } from 'react-native';

export interface LogoProps {
    imagem: any;
    style: ImageStyle;
}

class Logo extends Component<LogoProps> {
    render() {
        return (
            <Image
                source={this.props.imagem}
                style={this.props.style}
            />
        );
    }
}

export default Logo;