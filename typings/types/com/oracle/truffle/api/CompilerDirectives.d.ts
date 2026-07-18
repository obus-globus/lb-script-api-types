import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class CompilerDirectives extends Object {
    static FASTPATH_PROBABILITY: number;
    static LIKELY_PROBABILITY: number;
    static SLOWPATH_PROBABILITY: number;
    static UNLIKELY_PROBABILITY: number;
    static bailout(paramreason: string): void;
    static blackhole(paramvalue: boolean): void;
    static blackhole(paramvalue: number): void;
    static blackhole(paramvalue: string): void;
    static blackhole(paramvalue: Object): void;
    static castExact<T extends unknown>(paramobject: Object, paramclazz: Class<T>): T;
    static ensureAllocatedHere<T extends unknown>(paramobject: T): T;
    static ensureVirtualized(paramobject: Object): void;
    static ensureVirtualizedHere(paramobject: Object): void;
    static hasNextTier(): boolean;
    static inCompilationRoot(): boolean;
    static inCompiledCode(): boolean;
    static inInterpreter(): boolean;
    static injectBranchProbability(paramprobability: number, paramcondition: boolean): boolean;
    static interpreterOnly<T extends unknown>(paramcallable: () => T): T;
    static interpreterOnly(paramrunnable: () => void): void;
    static isCompilationConstant(paramvalue: Object): boolean;
    static isExact(paramobject: Object, paramclazz: Class<Object>): boolean;
    static isPartialEvaluationConstant(paramvalue: Object): boolean;
    static materialize(paramobj: Object): void;
    static shouldNotReachHere(): RuntimeException;
    static shouldNotReachHere(parammessage: string): RuntimeException;
    static shouldNotReachHere(parammessage: string, paramcause: Throwable): RuntimeException;
    static shouldNotReachHere(paramcause: Throwable): RuntimeException;
    static transferToInterpreter(): void;
    static transferToInterpreterAndInvalidate(): void;
    private constructor()
}