import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import Styles from './index.scss';

class Test extends Component {
  config = {
    navigationBarTitleText: '测试页'
  }

  componentWillReceiveProps(nextProps) {
    console.log('will receive props', this.props, nextProps);
  };

  render() {
    return (
      <View className={Styles.testPage}>
        <View>this is the first test page </View>
        <Button onClick={() => Taro.navigateBack({ delta: 0 })}>test go back home</Button>
      </View>
    )
  }
}

export default Test;