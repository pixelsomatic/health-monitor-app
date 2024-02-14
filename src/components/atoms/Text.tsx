import React from 'react';
import { StyleSheet } from 'react-native';
import {Text as RNText} from 'react-native-paper';
import { colors } from '../../designSystem/color';
import { sizes } from '../../designSystem/grid';
import { typography } from '../../designSystem/text';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

type TextProps = {
  children: React.ReactNode;
  variant?: VariantProp<keyof typeof typography>;
  type: 'header' | 'labelButton' | 'headerBold' | 'text';

};

const Text = ({variant, children, type}: TextProps) => (
  <RNText
    variant={variant}
    style={type === 'header' ? styles.header : styles.buttonLabel}
  >
    {children}
  </RNText>
);

export default Text;

const styles = StyleSheet.create({
  header: {
    marginBottom: sizes.md,
  },
  headerBold: {
    fontWeight: 'bold',
    marginBottom: sizes.md,
  },
  buttonLabel: {
    marginBottom: sizes.none,
    textAlign: 'center',
    color: colors.text
  },
  text: {
    marginBottom: sizes.sm,
  }
})