// Generated by src/generate.js.

/**
 * Copyright 2016 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export class ArrayAssignmentTarget {
  constructor({elements, rest}) {
    this.type = 'ArrayAssignmentTarget';
    this.elements = elements;
    this.rest = rest;
  }
}

export class ArrayBinding {
  constructor({elements, rest}) {
    this.type = 'ArrayBinding';
    this.elements = elements;
    this.rest = rest;
  }
}

export class ArrayExpression {
  constructor({elements}) {
    this.type = 'ArrayExpression';
    this.elements = elements;
  }
}

export class ArrowExpression {
  constructor({params, body}) {
    this.type = 'ArrowExpression';
    this.params = params;
    this.body = body;
  }
}

export class AssignmentExpression {
  constructor({binding, expression}) {
    this.type = 'AssignmentExpression';
    this.binding = binding;
    this.expression = expression;
  }
}

export class AssignmentTargetIdentifier {
  constructor({name}) {
    this.type = 'AssignmentTargetIdentifier';
    this.name = name;
  }
}

export class AssignmentTargetPropertyIdentifier {
  constructor({binding, init}) {
    this.type = 'AssignmentTargetPropertyIdentifier';
    this.binding = binding;
    this.init = init;
  }
}

export class AssignmentTargetPropertyProperty {
  constructor({name, binding}) {
    this.type = 'AssignmentTargetPropertyProperty';
    this.name = name;
    this.binding = binding;
  }
}

export class AssignmentTargetWithDefault {
  constructor({binding, init}) {
    this.type = 'AssignmentTargetWithDefault';
    this.binding = binding;
    this.init = init;
  }
}

export class BinaryExpression {
  constructor({left, operator, right}) {
    this.type = 'BinaryExpression';
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
}

export class BindingIdentifier {
  constructor({name}) {
    this.type = 'BindingIdentifier';
    this.name = name;
  }
}

export class BindingPropertyIdentifier {
  constructor({binding, init}) {
    this.type = 'BindingPropertyIdentifier';
    this.binding = binding;
    this.init = init;
  }
}

export class BindingPropertyProperty {
  constructor({name, binding}) {
    this.type = 'BindingPropertyProperty';
    this.name = name;
    this.binding = binding;
  }
}

export class BindingWithDefault {
  constructor({binding, init}) {
    this.type = 'BindingWithDefault';
    this.binding = binding;
    this.init = init;
  }
}

export class Block {
  constructor({statements}) {
    this.type = 'Block';
    this.statements = statements;
  }
}

export class BlockStatement {
  constructor({block}) {
    this.type = 'BlockStatement';
    this.block = block;
  }
}

export class BreakStatement {
  constructor({label}) {
    this.type = 'BreakStatement';
    this.label = label;
  }
}

export class CallExpression {
  constructor({callee, arguments: _arguments}) {
    this.type = 'CallExpression';
    this.callee = callee;
    this.arguments = _arguments;
  }
}

export class CatchClause {
  constructor({binding, body}) {
    this.type = 'CatchClause';
    this.binding = binding;
    this.body = body;
  }
}

export class ClassDeclaration {
  constructor({name, super: _super, elements}) {
    this.type = 'ClassDeclaration';
    this.name = name;
    this.super = _super;
    this.elements = elements;
  }
}

export class ClassElement {
  constructor({isStatic, method}) {
    this.type = 'ClassElement';
    this.isStatic = isStatic;
    this.method = method;
  }
}

export class ClassExpression {
  constructor({name, super: _super, elements}) {
    this.type = 'ClassExpression';
    this.name = name;
    this.super = _super;
    this.elements = elements;
  }
}

export class CompoundAssignmentExpression {
  constructor({binding, operator, expression}) {
    this.type = 'CompoundAssignmentExpression';
    this.binding = binding;
    this.operator = operator;
    this.expression = expression;
  }
}

export class ComputedMemberAssignmentTarget {
  constructor({object, expression}) {
    this.type = 'ComputedMemberAssignmentTarget';
    this.object = object;
    this.expression = expression;
  }
}

export class ComputedMemberExpression {
  constructor({object, expression}) {
    this.type = 'ComputedMemberExpression';
    this.object = object;
    this.expression = expression;
  }
}

export class ComputedPropertyName {
  constructor({expression}) {
    this.type = 'ComputedPropertyName';
    this.expression = expression;
  }
}

export class ConditionalExpression {
  constructor({test, consequent, alternate}) {
    this.type = 'ConditionalExpression';
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class ContinueStatement {
  constructor({label}) {
    this.type = 'ContinueStatement';
    this.label = label;
  }
}

export class DataProperty {
  constructor({name, expression}) {
    this.type = 'DataProperty';
    this.name = name;
    this.expression = expression;
  }
}

export class DebuggerStatement {
  constructor() {
    this.type = 'DebuggerStatement';
  }
}

export class Directive {
  constructor({rawValue}) {
    this.type = 'Directive';
    this.rawValue = rawValue;
  }
}

export class DoWhileStatement {
  constructor({body, test}) {
    this.type = 'DoWhileStatement';
    this.body = body;
    this.test = test;
  }
}

export class EmptyStatement {
  constructor() {
    this.type = 'EmptyStatement';
  }
}

export class Export {
  constructor({declaration}) {
    this.type = 'Export';
    this.declaration = declaration;
  }
}

export class ExportAllFrom {
  constructor({moduleSpecifier}) {
    this.type = 'ExportAllFrom';
    this.moduleSpecifier = moduleSpecifier;
  }
}

export class ExportDefault {
  constructor({body}) {
    this.type = 'ExportDefault';
    this.body = body;
  }
}

export class ExportFrom {
  constructor({namedExports, moduleSpecifier}) {
    this.type = 'ExportFrom';
    this.namedExports = namedExports;
    this.moduleSpecifier = moduleSpecifier;
  }
}

export class ExportFromSpecifier {
  constructor({name, exportedName}) {
    this.type = 'ExportFromSpecifier';
    this.name = name;
    this.exportedName = exportedName;
  }
}

export class ExportLocalSpecifier {
  constructor({name, exportedName}) {
    this.type = 'ExportLocalSpecifier';
    this.name = name;
    this.exportedName = exportedName;
  }
}

export class ExportLocals {
  constructor({namedExports}) {
    this.type = 'ExportLocals';
    this.namedExports = namedExports;
  }
}

export class ExpressionStatement {
  constructor({expression}) {
    this.type = 'ExpressionStatement';
    this.expression = expression;
  }
}

export class ForInStatement {
  constructor({left, right, body}) {
    this.type = 'ForInStatement';
    this.left = left;
    this.right = right;
    this.body = body;
  }
}

export class ForOfStatement {
  constructor({left, right, body}) {
    this.type = 'ForOfStatement';
    this.left = left;
    this.right = right;
    this.body = body;
  }
}

export class ForStatement {
  constructor({init, test, update, body}) {
    this.type = 'ForStatement';
    this.init = init;
    this.test = test;
    this.update = update;
    this.body = body;
  }
}

export class FormalParameters {
  constructor({items, rest}) {
    this.type = 'FormalParameters';
    this.items = items;
    this.rest = rest;
  }
}

export class FunctionBody {
  constructor({directives, statements}) {
    this.type = 'FunctionBody';
    this.directives = directives;
    this.statements = statements;
  }
}

export class FunctionDeclaration {
  constructor({isGenerator, name, params, body}) {
    this.type = 'FunctionDeclaration';
    this.isGenerator = isGenerator;
    this.name = name;
    this.params = params;
    this.body = body;
  }
}

export class FunctionExpression {
  constructor({isGenerator, name, params, body}) {
    this.type = 'FunctionExpression';
    this.isGenerator = isGenerator;
    this.name = name;
    this.params = params;
    this.body = body;
  }
}

export class Getter {
  constructor({name, body}) {
    this.type = 'Getter';
    this.name = name;
    this.body = body;
  }
}

export class IdentifierExpression {
  constructor({name}) {
    this.type = 'IdentifierExpression';
    this.name = name;
  }
}

export class IfStatement {
  constructor({test, consequent, alternate}) {
    this.type = 'IfStatement';
    this.test = test;
    this.consequent = consequent;
    this.alternate = alternate;
  }
}

export class Import {
  constructor({defaultBinding, namedImports, moduleSpecifier}) {
    this.type = 'Import';
    this.defaultBinding = defaultBinding;
    this.namedImports = namedImports;
    this.moduleSpecifier = moduleSpecifier;
  }
}

export class ImportNamespace {
  constructor({defaultBinding, namespaceBinding, moduleSpecifier}) {
    this.type = 'ImportNamespace';
    this.defaultBinding = defaultBinding;
    this.namespaceBinding = namespaceBinding;
    this.moduleSpecifier = moduleSpecifier;
  }
}

export class ImportSpecifier {
  constructor({name, binding}) {
    this.type = 'ImportSpecifier';
    this.name = name;
    this.binding = binding;
  }
}

export class LabeledStatement {
  constructor({label, body}) {
    this.type = 'LabeledStatement';
    this.label = label;
    this.body = body;
  }
}

export class LiteralBooleanExpression {
  constructor({value}) {
    this.type = 'LiteralBooleanExpression';
    this.value = value;
  }
}

export class LiteralInfinityExpression {
  constructor() {
    this.type = 'LiteralInfinityExpression';
  }
}

export class LiteralNullExpression {
  constructor() {
    this.type = 'LiteralNullExpression';
  }
}

export class LiteralNumericExpression {
  constructor({value}) {
    this.type = 'LiteralNumericExpression';
    this.value = value;
  }
}

export class LiteralRegExpExpression {
  constructor({pattern, global, ignoreCase, multiLine, sticky, unicode}) {
    this.type = 'LiteralRegExpExpression';
    this.pattern = pattern;
    this.global = global;
    this.ignoreCase = ignoreCase;
    this.multiLine = multiLine;
    this.sticky = sticky;
    this.unicode = unicode;
  }
}

export class LiteralStringExpression {
  constructor({value}) {
    this.type = 'LiteralStringExpression';
    this.value = value;
  }
}

export class Method {
  constructor({isGenerator, name, params, body}) {
    this.type = 'Method';
    this.isGenerator = isGenerator;
    this.name = name;
    this.params = params;
    this.body = body;
  }
}

export class Module {
  constructor({directives, items}) {
    this.type = 'Module';
    this.directives = directives;
    this.items = items;
  }
}

export class NewExpression {
  constructor({callee, arguments: _arguments}) {
    this.type = 'NewExpression';
    this.callee = callee;
    this.arguments = _arguments;
  }
}

export class NewTargetExpression {
  constructor() {
    this.type = 'NewTargetExpression';
  }
}

export class ObjectAssignmentTarget {
  constructor({properties}) {
    this.type = 'ObjectAssignmentTarget';
    this.properties = properties;
  }
}

export class ObjectBinding {
  constructor({properties}) {
    this.type = 'ObjectBinding';
    this.properties = properties;
  }
}

export class ObjectExpression {
  constructor({properties}) {
    this.type = 'ObjectExpression';
    this.properties = properties;
  }
}

export class ReturnStatement {
  constructor({expression}) {
    this.type = 'ReturnStatement';
    this.expression = expression;
  }
}

export class Script {
  constructor({directives, statements}) {
    this.type = 'Script';
    this.directives = directives;
    this.statements = statements;
  }
}

export class Setter {
  constructor({name, param, body}) {
    this.type = 'Setter';
    this.name = name;
    this.param = param;
    this.body = body;
  }
}

export class ShorthandProperty {
  constructor({name}) {
    this.type = 'ShorthandProperty';
    this.name = name;
  }
}

export class SpreadElement {
  constructor({expression}) {
    this.type = 'SpreadElement';
    this.expression = expression;
  }
}

export class StaticMemberAssignmentTarget {
  constructor({object, property}) {
    this.type = 'StaticMemberAssignmentTarget';
    this.object = object;
    this.property = property;
  }
}

export class StaticMemberExpression {
  constructor({object, property}) {
    this.type = 'StaticMemberExpression';
    this.object = object;
    this.property = property;
  }
}

export class StaticPropertyName {
  constructor({value}) {
    this.type = 'StaticPropertyName';
    this.value = value;
  }
}

export class Super {
  constructor() {
    this.type = 'Super';
  }
}

export class SwitchCase {
  constructor({test, consequent}) {
    this.type = 'SwitchCase';
    this.test = test;
    this.consequent = consequent;
  }
}

export class SwitchDefault {
  constructor({consequent}) {
    this.type = 'SwitchDefault';
    this.consequent = consequent;
  }
}

export class SwitchStatement {
  constructor({discriminant, cases}) {
    this.type = 'SwitchStatement';
    this.discriminant = discriminant;
    this.cases = cases;
  }
}

export class SwitchStatementWithDefault {
  constructor({discriminant, preDefaultCases, defaultCase, postDefaultCases}) {
    this.type = 'SwitchStatementWithDefault';
    this.discriminant = discriminant;
    this.preDefaultCases = preDefaultCases;
    this.defaultCase = defaultCase;
    this.postDefaultCases = postDefaultCases;
  }
}

export class TemplateElement {
  constructor({rawValue}) {
    this.type = 'TemplateElement';
    this.rawValue = rawValue;
  }
}

export class TemplateExpression {
  constructor({tag, elements}) {
    this.type = 'TemplateExpression';
    this.tag = tag;
    this.elements = elements;
  }
}

export class ThisExpression {
  constructor() {
    this.type = 'ThisExpression';
  }
}

export class ThrowStatement {
  constructor({expression}) {
    this.type = 'ThrowStatement';
    this.expression = expression;
  }
}

export class TryCatchStatement {
  constructor({body, catchClause}) {
    this.type = 'TryCatchStatement';
    this.body = body;
    this.catchClause = catchClause;
  }
}

export class TryFinallyStatement {
  constructor({body, catchClause, finalizer}) {
    this.type = 'TryFinallyStatement';
    this.body = body;
    this.catchClause = catchClause;
    this.finalizer = finalizer;
  }
}

export class UnaryExpression {
  constructor({operator, operand}) {
    this.type = 'UnaryExpression';
    this.operator = operator;
    this.operand = operand;
  }
}

export class UpdateExpression {
  constructor({isPrefix, operator, operand}) {
    this.type = 'UpdateExpression';
    this.isPrefix = isPrefix;
    this.operator = operator;
    this.operand = operand;
  }
}

export class VariableDeclaration {
  constructor({kind, declarators}) {
    this.type = 'VariableDeclaration';
    this.kind = kind;
    this.declarators = declarators;
  }
}

export class VariableDeclarationStatement {
  constructor({declaration}) {
    this.type = 'VariableDeclarationStatement';
    this.declaration = declaration;
  }
}

export class VariableDeclarator {
  constructor({binding, init}) {
    this.type = 'VariableDeclarator';
    this.binding = binding;
    this.init = init;
  }
}

export class WhileStatement {
  constructor({test, body}) {
    this.type = 'WhileStatement';
    this.test = test;
    this.body = body;
  }
}

export class WithStatement {
  constructor({object, body}) {
    this.type = 'WithStatement';
    this.object = object;
    this.body = body;
  }
}

export class YieldExpression {
  constructor({expression}) {
    this.type = 'YieldExpression';
    this.expression = expression;
  }
}

export class YieldGeneratorExpression {
  constructor({expression}) {
    this.type = 'YieldGeneratorExpression';
    this.expression = expression;
  }
}
