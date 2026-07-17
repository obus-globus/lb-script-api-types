import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export abstract class Accessor$ExceptionSupport extends Accessor$Support {
    constructor()
    assertGuestObject(guestObject: Object): boolean;
    createDefaultStackTraceElementObject(rootNode: RootNode, sourceSection: SourceSection, byteCodeIndex: number): Object;
    getEmbedderStackTrace(throwable: Throwable, vmObject: Object, fromHost: boolean): Object;
    getExceptionCause(receiver: Object): Object;
    getExceptionExitStatus(receiver: Object): number;
    getExceptionMessage(receiver: Object): Object;
    getExceptionStackTrace(throwable: Throwable, polyglotContext: Object): Object;
    getExceptionType(receiver: Object): Object;
    getLazyStackTrace(exception: Throwable): Throwable;
    getLocation(receiver: Object): Node;
    getSourceLocation(receiver: Object): SourceSection;
    getStackTraceElementLimit(receiver: Object): number;
    hasExceptionCause(receiver: Object): boolean;
    hasExceptionMessage(receiver: Object): boolean;
    hasExceptionStackTrace(receiver: Object): boolean;
    hasSourceLocation(receiver: Object): boolean;
    isException(receiver: Object): boolean;
    isExceptionIncompleteSource(receiver: Object): boolean;
    mergeHostGuestFrames<T extends unknown, G extends unknown>(polyglotEngine: Object, hostStack: StackTraceElement[], guestFrames: Iterator<G>, inHostLanguage: boolean, includeHostFrames: boolean, hostFrameConvertor: (param0: StackTraceElement) => T, guestFrameConvertor: (param0: G) => T): Iterator<T>;
    setLazyStackTrace(exception: Throwable, stackTrace: Throwable): void;
    throwException(receiver: Object): RuntimeException;
}