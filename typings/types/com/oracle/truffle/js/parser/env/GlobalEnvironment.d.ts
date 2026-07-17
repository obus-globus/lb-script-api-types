import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSFrameSlot } from '../../../../../../com/oracle/truffle/js/nodes/JSFrameSlot.d.ts'
import type { NodeFactory } from '../../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { DerivedEnvironment } from '../../../../../../com/oracle/truffle/js/parser/env/DerivedEnvironment.d.ts'
import type { Environment } from '../../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { GlobalEnvironment$DeclarationKind } from '../../../../../../com/oracle/truffle/js/parser/env/GlobalEnvironment$DeclarationKind.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class GlobalEnvironment extends DerivedEnvironment {
    static isGlobalObjectConstant(paramname: TruffleString): boolean;
    constructor(parent: Environment, factory: NodeFactory, context: JSContext)
    // private declarations: EconomicMap<TruffleString, GlobalEnvironment$DeclarationKind>;
    addLexicalDeclaration(name: TruffleString, isConst: boolean): void;
    addVarDeclaration(name: TruffleString): void;
    findBlockFrameSlot(name: Object): JSFrameSlot;
    hasBeenDeclared(name: TruffleString): boolean;
    hasConstDeclaration(name: TruffleString): boolean;
    hasLexicalDeclaration(name: TruffleString): boolean;
    hasVarDeclaration(name: TruffleString): boolean;
    setHasBeenDeclared(name: TruffleString, declared: boolean): void;
    toStringImpl(state: JavaMap<string, number>): string;
}