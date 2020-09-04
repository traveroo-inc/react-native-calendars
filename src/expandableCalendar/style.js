import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../style';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { heightPercentageToDP } from 'react-native-responsive-screen';


const commons = require('./commons');
const STYLESHEET_ID = 'stylesheet.expandable.main';

export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  
  return StyleSheet.create({
    containerShadow: {
      backgroundColor: '#F4F4F4',
      ...ifIphoneX({
        paddingTop: heightPercentageToDP(7),
        
      }, { paddingTop: heightPercentageToDP(4.5) })
    },
    container: {
      backgroundColor: '#F4F4F4',
    },
    knobContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 32,
      shadowColor: '#8386A3',
      shadowOpacity: 0.10,
      shadowRadius: 10,
      shadowOffset: {height: 6, width: 0},
      zIndex: 99,
      ...ifIphoneX({
        bottom: -heightPercentageToDP(1.9),
      }, {
        bottom: -heightPercentageToDP(2.1),
      }),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
    knob: {
      width: 40,
      height: 4,
      borderRadius: 3,
      backgroundColor: '#e8ecf0'
    },
    sectionText: {
      fontWeight: 'bold', 
      fontSize: 12,
      lineHeight: 16,
      color: '#7a92a5',
      paddingTop: 24, // 8
      paddingBottom: 8,
      paddingLeft: 20,
      backgroundColor: 'black',
      textAlign: 'left',
      textTransform: 'uppercase'
    },
    header: {
      position: 'absolute',
      left: 0,
      right: 0,
      backgroundColor: '#F4F4F4'
    },
    headerTitle: {
      alignSelf: 'center',
      paddingTop: 13,
      paddingBottom: 18,
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor
    },
    weekDayNames: {
      flexDirection: 'row', 
      justifyContent: 'space-between' 
    },
    weekday: {
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      paddingRight: 15,
      paddingLeft: 15,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor
    },
    arrowImage: {
      tintColor: appStyle.arrowColor
    },
    todayButtonContainer: {
      alignItems: appStyle.todayButtonPosition === 'right' ? 'flex-end' : 'flex-start',
      position: 'absolute', 
      left: 20, 
      right: 20, 
      bottom : 0
    },
    todayButton: {
      height: commons.isTablet ? 40 : 28, 
      paddingHorizontal: commons.isTablet ? 20 : 12,
      borderRadius: commons.isTablet ? 20 : 14,
      flexDirection: appStyle.todayButtonPosition === 'right' ? 'row-reverse' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      ...Platform.select({
        ios: {
          shadowColor: '#A38F83',
          shadowOpacity: 0.3,
          shadowRadius: 10,
          shadowOffset: {height: 6, width: 0}
        },
        android: {
          elevation: 5
        }
      })
    },
    todayButtonText: {
      color: appStyle.todayButtonTextColor,
      fontSize: commons.isTablet ? appStyle.todayButtonFontSize + 2 : appStyle.todayButtonFontSize, 
      fontWeight: appStyle.todayButtonFontWeight,
      fontFamily: appStyle.todayButtonFontFamily
    },
    todayButtonImage: {
      tintColor: appStyle.todayButtonTextColor, 
      marginLeft: appStyle.todayButtonPosition === 'right' ? 7 : undefined,
      marginRight: appStyle.todayButtonPosition === 'right' ? undefined : 7
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
