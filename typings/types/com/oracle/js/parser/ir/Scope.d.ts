import type { Scope$UseInfo } from '../../../../../com/oracle/js/parser/ir/Scope$UseInfo.d.ts'
import type { Symbol } from '../../../../../com/oracle/js/parser/ir/Symbol.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class Scope extends Object {
    static createBlock(paramparent: Scope): Scope;
    static createCatchParameter(paramparent: Scope): Scope;
    static createClassBody(paramparent: Scope): Scope;
    static createClassHead(paramparent: Scope): Scope;
    static createEval(paramparent: Scope, paramstrict: boolean): Scope;
    static createFunctionBody(paramparent: Scope): Scope;
    static createFunctionBody(paramparent: Scope, paramfunctionFlags: number, paramfunctionTopScope: boolean): Scope;
    static createFunctionParameter(paramparent: Scope, paramfunctionFlags: number): Scope;
    static createGlobal(): Scope;
    static createModule(): Scope;
    static createSwitchBlock(paramparent: Scope): Scope;
    private constructor(parent: Scope, type: number)
    private constructor(parent: Scope, type: number, flags: number)
    readonly closed: boolean;
    // private flags: number;
    // private hasBlockScopedOrRedeclaredSymbols: boolean;
    // private hasClosures: boolean;
    // private hasEval: boolean;
    // private hasNestedEval: boolean;
    // private hasPrivateNames: boolean;
    readonly parent: Scope;
    readonly symbols: EconomicMap<string, Symbol>;
    // private type: number;
    // private uses: EconomicMap<string, Scope$UseInfo>;
    addIdentifierReference(name: string): void;
    // private addLocalUse(name: string): void;
    addPrivateName(name: TruffleString, symbolFlags: number): boolean;
    // private addUsesFromInnerScope(name: string, useInfo: Scope$UseInfo): void;
    close(): void;
    findBlockScopedSymbolInFunction(varName: string): Symbol;
    findPrivateName(name: string): boolean;
    getExistingSymbol(name: string): Symbol;
    getParent(): Scope;
    // private getScopeKindName(): string;
    getSymbolCount(): number;
    getSymbols(): Symbol[];
    // private getUseInfo(name: string): Scope$UseInfo;
    hasBlockScopedOrRedeclaredSymbols(): boolean;
    hasClosures(): boolean;
    hasDeclarations(): boolean;
    hasEval(): boolean;
    hasNestedEval(): boolean;
    hasPrivateNames(): boolean;
    hasSymbol(name: string): boolean;
    inClassFieldInitializer(): boolean;
    inDerivedConstructor(): boolean;
    inFunction(): boolean;
    inMethod(): boolean;
    isArrowFunctionParameterScope(): boolean;
    isBlockScope(): boolean;
    isCatchParameterScope(): boolean;
    isClassBodyScope(): boolean;
    isClassHeadScope(): boolean;
    isClosed(): boolean;
    isEvalScope(): boolean;
    isFunctionBodyScope(): boolean;
    isFunctionParameterScope(): boolean;
    isFunctionTopScope(): boolean;
    isGlobalScope(): boolean;
    // private isKillable(): boolean;
    isLexicallyDeclaredName(varName: string, annexB: boolean, includeParameters: boolean): boolean;
    isModuleScope(): boolean;
    isSwitchBlockScope(): boolean;
    kill(): void;
    putSymbol(symbol: Symbol): Symbol;
    // private putUseInfo(name: string, useInfo: Scope$UseInfo): void;
    // private removeUseInfo(name: string): void;
    resolveUses(): void;
    setHasEval(): void;
    setHasNestedEval(): void;
    toString(): string;
}