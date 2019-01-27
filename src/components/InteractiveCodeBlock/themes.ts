import ts from 'typescript';
import { TokenStyles } from './InteractiveCodeBlock';
import { PrismTokenType } from './tokenizers/prism';
import './themes.css';

export interface InteractiveCodeBlockTheme<ScopeNameT extends string> {
  tokens: TokenStyles<ScopeNameT>;
  block: React.CSSProperties & { [key: string]: string | number };
}

export enum SyntacticColors {
  Function = '#795E26',
  Types = '#267f99',
  ControlFlow = '#AF00DB',
  VariableName = '#001080',
  RegExp = '#d16969',
  Comment = '#008000',
  Keyword = '#0000ff',
  Numeric = '#09885a',
  String = '#a31515',
  Property = '#0451a5',
  Punctuation = '#000000',
  Operator = '#000000',
}

export const commonBlockStyles: React.CSSProperties & { [key: string]: string | number } = {
  fontFamily: 'monospace',
  fontSize: '90%',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  borderRadius: 3,
  overflow: 'auto',
  whiteSpace: 'nowrap',
};

export const typeScriptVSCode: InteractiveCodeBlockTheme<ts.ClassificationTypeNames> = {
  tokens: {
    [ts.ClassificationTypeNames.bigintLiteral]: { color: SyntacticColors.Numeric },
    [ts.ClassificationTypeNames.className]: { color: SyntacticColors.Types },
    [ts.ClassificationTypeNames.comment]: { color: SyntacticColors.Comment },
    [ts.ClassificationTypeNames.docCommentTagName]: { color: SyntacticColors.Keyword },
    [ts.ClassificationTypeNames.enumName]: { color: SyntacticColors.Types },
    [ts.ClassificationTypeNames.identifier]: { color: SyntacticColors.VariableName },
    [ts.ClassificationTypeNames.interfaceName]: { color: SyntacticColors.Types },
    [ts.ClassificationTypeNames.jsxAttribute]: { color: SyntacticColors.Property },
    [ts.ClassificationTypeNames.jsxAttributeStringLiteralValue]: { color: SyntacticColors.String },
    [ts.ClassificationTypeNames.jsxCloseTagName]: { color: SyntacticColors.Types },
    [ts.ClassificationTypeNames.jsxOpenTagName]: { color: SyntacticColors.Types },
    [ts.ClassificationTypeNames.jsxSelfClosingTagName]: { color: SyntacticColors.Types },
    [ts.ClassificationTypeNames.jsxText]: {},
    [ts.ClassificationTypeNames.keyword]: { color: SyntacticColors.Keyword },
    [ts.ClassificationTypeNames.moduleName]: {},
    [ts.ClassificationTypeNames.numericLiteral]: { color: SyntacticColors.Numeric },
    [ts.ClassificationTypeNames.operator]: { color: SyntacticColors.Punctuation },
    [ts.ClassificationTypeNames.parameterName]: { color: SyntacticColors.VariableName },
    [ts.ClassificationTypeNames.punctuation]: { color: SyntacticColors.Punctuation },
    [ts.ClassificationTypeNames.stringLiteral]: { color: SyntacticColors.String },
    [ts.ClassificationTypeNames.text]: {},
    [ts.ClassificationTypeNames.typeAliasName]: { color: SyntacticColors.Types },
    [ts.ClassificationTypeNames.typeParameterName]: { color: SyntacticColors.Types },
    [ts.ClassificationTypeNames.whiteSpace]: {},
  },
  block: {},
};

export const tmVSCode: InteractiveCodeBlockTheme<string> = {
  tokens: {
    'storage.modifier': { color: SyntacticColors.Keyword },
    'storage.type': { color: SyntacticColors.Keyword },
    'keyword.control': { color: SyntacticColors.Keyword },
    'keyword.other': { color: SyntacticColors.Keyword },
    'keyword.operator.expression': { color: SyntacticColors.Keyword },
    'keyword.operator.new': { color: SyntacticColors.Keyword },
    'keyword.generator.asterisk': { color: SyntacticColors.Keyword },
    'punctuation.definition.template-expression': { color: SyntacticColors.Keyword },
    'support.type': { color: SyntacticColors.Keyword },
    'constant.language': { color: SyntacticColors.Keyword },
    'variable.language': { color: SyntacticColors.Keyword },
    string: { color: SyntacticColors.String },
    'punctuation.definition.string': { color: SyntacticColors.String },
    'constant.character': { color: SyntacticColors.String },
    'keyword.control.anchor.regexp': { color: SyntacticColors.RegExp },
    'keyword.other.back-reference.regexp': { color: SyntacticColors.RegExp },
    'keyword.operator.quantifier.regexp': { color: SyntacticColors.RegExp },
    'keyword.operator.or.regexp': { color: SyntacticColors.RegExp },
    'keyword.operator.negation.regexp': { color: SyntacticColors.RegExp },
    'punctuation.definition.group.regexp': { color: SyntacticColors.RegExp },
    'punctuation.definition.group.assertion.regexp': { color: SyntacticColors.RegExp },
    'meta.assertion.look-ahead.regexp': { color: SyntacticColors.RegExp },
    'meta.assertion.negative-look-ahead.regexp': { color: SyntacticColors.RegExp },
    'punctuation.definition.group.capture.regexp': { color: SyntacticColors.RegExp },
    'punctuation.definition.character-class.regexp': { color: SyntacticColors.RegExp },
    'constant.other.character-class.range.regexp': { color: SyntacticColors.RegExp },
    'constant.numeric': { color: SyntacticColors.Numeric },
    'meta.delimiter.decimal.period.tsx': { color: SyntacticColors.Numeric },
    'constant.language.nan.tsx': { color: SyntacticColors.Numeric },
    'constant.language.infinity.tsx': { color: SyntacticColors.Numeric },
    'keyword.operator': { color: SyntacticColors.Operator },
    'storage.type.function.arrow.tsx': { color: SyntacticColors.Operator },
    'meta.brace.angle.tsx': { colors: SyntacticColors.Punctuation },
    'meta.brace.round.tsx': { colors: SyntacticColors.Punctuation },
    'meta.brace.square.tsx': { colors: SyntacticColors.Punctuation },
    punctuation: { colors: SyntacticColors.Punctuation },
    'constant.language.import-export-all.tsx': { colors: SyntacticColors.Punctuation },
    'meta.delimiter.object.comma.tsx': { colors: SyntacticColors.Punctuation },
    comment: { colors: SyntacticColors.Comment },
    'comment.block.tsx': { colors: SyntacticColors.Comment },
    'comment.line.double-slash.tsx': { colors: SyntacticColors.Comment },
    'punctuation.definition.comment.tsx': { colors: SyntacticColors.Comment },
    'comment.block.documentation.tsx': { colors: SyntacticColors.Comment },
    'other.meta.jsdoc': { colors: SyntacticColors.Comment },
    'other.description.jsdoc': { colors: SyntacticColors.Comment },
    'entity.name.type.instance.jsdoc': { colors: SyntacticColors.VariableName },
    'variable.other.jsdoc': { colors: SyntacticColors.VariableName },
    'storage.type.class.jsdoc': { colors: SyntacticColors.Types },
    'entity.name.type.class.tsx': { color: SyntacticColors.Types },
    'entity.name.type.module.tsx': { color: SyntacticColors.ControlFlow },
    'entity.name.type.enum.tsx': { color: SyntacticColors.Types },
    'entity.name.function': { color: SyntacticColors.Function },
    'entity.name.type': { color: SyntacticColors.Types },
    'meta.template.expression.tsx': { color: SyntacticColors.Types },
    variable: { color: SyntacticColors.VariableName },
    'entity.other.inherited-class.tsx': { color: SyntacticColors.Types },
    'constant.language.undefined.tsx': { color: SyntacticColors.Keyword },
    'variable.language.arguments.tsx': { color: SyntacticColors.VariableName },
    'support.type.object': { color: SyntacticColors.VariableName },
    'entity.name.tag': { color: SyntacticColors.Types },
    'entity.other.attribute-name': { color: SyntacticColors.VariableName },
  },
  block: {},
};

export const prismVSCode: InteractiveCodeBlockTheme<PrismTokenType> = {
  tokens: {
    [PrismTokenType.Boolean]: { color: SyntacticColors.Keyword },
    [PrismTokenType.Builtin]: { color: SyntacticColors.VariableName },
    [PrismTokenType.ClassName]: { color: SyntacticColors.Types },
    [PrismTokenType.Comment]: { color: SyntacticColors.Comment },
    [PrismTokenType.Constant]: { color: SyntacticColors.VariableName },
    [PrismTokenType.Function]: { color: SyntacticColors.Function },
    [PrismTokenType.FunctionVariable]: { color: SyntacticColors.Function },
    [PrismTokenType.Keyword]: { color: SyntacticColors.Keyword },
    [PrismTokenType.Number]: { color: SyntacticColors.Numeric },
    [PrismTokenType.Operator]: { color: SyntacticColors.Operator },
    [PrismTokenType.Punctuation]: { color: SyntacticColors.Punctuation },
    [PrismTokenType.RegExp]: { color: SyntacticColors.RegExp },
    [PrismTokenType.String]: { color: SyntacticColors.String },
    [PrismTokenType.Type]: { color: SyntacticColors.Keyword },
  },
  block: {},
};
