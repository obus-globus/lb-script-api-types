import type { Accessor$ExceptionSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$ExceptionSupport.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ExceptionAccessor$ExceptionSupportImpl extends Accessor$ExceptionSupport {
    constructor()
    assertGuestObject(guestObject: Object): boolean;
    createDefaultStackTraceElementObject(rootNode: RootNode, sourceSection: SourceSection): Object;
    getExceptionCause(receiver: Object): Object;
    getExceptionExitStatus(receiver: Object): number;
    getExceptionMessage(receiver: Object): Object;
    getExceptionStackTrace(receiver: Object, polyglotContext: Object): Object;
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
    setLazyStackTrace(exception: Throwable, stackTrace: Throwable): void;
    throwException(receiver: Object): RuntimeException;
}