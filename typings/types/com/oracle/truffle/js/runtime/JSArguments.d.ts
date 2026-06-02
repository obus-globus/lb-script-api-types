import type { MaterializedFrame } from '../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Completion } from '../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { Completion$Type } from '../../../../../com/oracle/truffle/js/runtime/objects/Completion$Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JSArguments extends Object {
    static EMPTY_ARGUMENTS_ARRAY: (Object | null)[];
    static RUNTIME_ARGUMENT_COUNT: number;
    static arraycopy(paramsrc: (Object | null)[], paramsrcPos: number, paramdest: (Object | null)[], paramdestPos: number, paramlength: number): void;
    static create(paramtarget: Object, paramfunction: Object, paramuserArguments: (Object | null)[]): (Object | null)[];
    static createInitial(paramtarget: Object, paramfunction: Object, paramuserArgumentCount: number): (Object | null)[];
    static createInitialWithNewTarget(paramtarget: Object, paramfunction: Object, paramnewTarget: Object, paramuserArgumentCount: number): (Object | null)[];
    static createOneArg(paramtarget: Object, paramfunction: Object, paramuserArgument: Object): (Object | null)[];
    static createResumeArguments(paramexecutionContext: Object, paramgeneratorOrPromiseCapability: Object, paramcompletionType: Completion$Type, paramcompletionValue: Object): (Object | null)[];
    static createResumeArguments(paramexecutionContext: Object, paramgenerator: Object, paramcompletion: Completion): (Object | null)[];
    static createWithNewTarget(paramtarget: Object, paramfunction: Object, paramnewTarget: Object, paramuserArguments: (Object | null)[]): (Object | null)[];
    static createZeroArg(paramtarget: Object, paramfunction: Object): (Object | null)[];
    static extractUserArguments(paramarguments: (Object | null)[]): (Object | null)[];
    static extractUserArguments(paramarguments: (Object | null)[], paramskip: number): (Object | null)[];
    static extractUserArguments(paramarguments: (Object | null)[], paramskip: number, paramskipEnd: number): (Object | null)[];
    static getEnclosingFrame(paramarguments: (Object | null)[]): MaterializedFrame;
    static getFunctionObject(paramarguments: (Object | null)[]): Object;
    static getNewTarget(paramarguments: (Object | null)[]): Object;
    static getResumeCompletion(paramarguments: (Object | null)[]): Completion;
    static getResumeCompletionType(paramarguments: (Object | null)[]): Completion$Type;
    static getResumeCompletionValue(paramarguments: (Object | null)[]): Object;
    static getResumeExecutionContext(paramarguments: (Object | null)[]): MaterializedFrame;
    static getResumeGeneratorOrPromiseCapability(paramarguments: (Object | null)[]): Object;
    static getThisObject(paramarguments: (Object | null)[]): Object;
    static getUserArgument(paramarguments: (Object | null)[], paramindex: number): Object;
    static getUserArgumentCount(paramarguments: (Object | null)[]): number;
    static setThisObject(paramarguments: (Object | null)[], paramvalue: Object): void;
    static setUserArgument(paramarguments: (Object | null)[], paramindex: number, paramvalue: Object): void;
    static setUserArguments(paramarguments: (Object | null)[], paramindex: number, paramuserArguments: (Object | null)[]): void;
    private constructor()
}