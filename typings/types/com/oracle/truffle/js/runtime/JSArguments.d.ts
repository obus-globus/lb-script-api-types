import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Completion } from '../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { Completion$Type } from '../../../../../com/oracle/truffle/js/runtime/objects/Completion$Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSArguments extends Object {
    static EMPTY_ARGUMENTS_ARRAY: Object[];
    static RUNTIME_ARGUMENT_COUNT: number;
    static arraycopy(paramsrc: Object[], paramsrcPos: number, paramdest: Object[], paramdestPos: number, paramlength: number): void;
    static create(paramtarget: Object, paramfunction: Object, ...paramuserArguments: Object[]): Object[];
    static createInitial(paramtarget: Object, paramfunction: Object, paramuserArgumentCount: number): Object[];
    static createInitialWithNewTarget(paramtarget: Object, paramfunction: Object, paramnewTarget: Object, paramuserArgumentCount: number): Object[];
    static createOneArg(paramtarget: Object, paramfunction: Object, paramuserArgument: Object): Object[];
    static createResumeArguments(paramexecutionContext: Object, paramgeneratorOrPromiseCapability: Object, paramcompletionType: Completion$Type, paramcompletionValue: Object): Object[];
    static createResumeArguments(paramexecutionContext: Object, paramgenerator: Object, paramcompletion: Completion): Object[];
    static createWithNewTarget(paramtarget: Object, paramfunction: Object, paramnewTarget: Object, ...paramuserArguments: Object[]): Object[];
    static createZeroArg(paramtarget: Object, paramfunction: Object): Object[];
    static extractUserArguments(paramarguments: Object[]): Object[];
    static extractUserArguments(paramarguments: Object[], paramskip: number): Object[];
    static extractUserArguments(paramarguments: Object[], paramskip: number, paramskipEnd: number): Object[];
    static getEnclosingFrame(paramarguments: Object[]): MaterializedFrame;
    static getFunctionObject(paramarguments: Object[]): Object;
    static getNewTarget(paramarguments: Object[]): Object;
    static getResumeCompletion(paramarguments: Object[]): Completion;
    static getResumeCompletionType(paramarguments: Object[]): Completion$Type;
    static getResumeCompletionValue(paramarguments: Object[]): Object;
    static getResumeExecutionContext(paramarguments: Object[]): MaterializedFrame;
    static getResumeGeneratorOrPromiseCapability(paramarguments: Object[]): Object;
    static getThisObject(paramarguments: Object[]): Object;
    static getUserArgument(paramarguments: Object[], paramindex: number): Object;
    static getUserArgumentCount(paramarguments: Object[]): number;
    static setThisObject(paramarguments: Object[], paramvalue: Object): void;
    static setUserArgument(paramarguments: Object[], paramindex: number, paramvalue: Object): void;
    static setUserArguments(paramarguments: Object[], paramindex: number, paramuserArguments: Object[]): void;
    private constructor()
}