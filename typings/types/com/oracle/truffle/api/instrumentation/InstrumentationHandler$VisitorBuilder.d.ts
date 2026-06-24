import type { EventBinding$Source } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding$Source.d.ts'
import type { InstrumentationHandler } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler.d.ts'
import type { InstrumentationHandler$VisitOperation } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation.d.ts'
import type { InstrumentationHandler$VisitOperation$Scope } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$VisitOperation$Scope.d.ts'
import type { InstrumentationHandler$Visitor } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$Visitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstrumentationHandler$VisitorBuilder extends Object {
    private constructor(null_: InstrumentationHandler)
    // private hasFindSourcesExecutedOperation: boolean;
    // private hasFindSourcesOperation: boolean;
    // private operations: InstrumentationHandler$VisitOperation[];
    // private shouldMaterializeSyntaxNodes: boolean;
    addDisposeWrapperOperationForBinding(binding: EventBinding$Source<Object>): InstrumentationHandler$VisitorBuilder;
    addDisposeWrapperOperationForBindings(bindings: EventBinding$Source<Object>[]): InstrumentationHandler$VisitorBuilder;
    addFindSourcesExecutedOperation(scope: InstrumentationHandler$VisitOperation$Scope): InstrumentationHandler$VisitorBuilder;
    addFindSourcesExecutedOperation(scope: InstrumentationHandler$VisitOperation$Scope, dontNotifyBindings: boolean): InstrumentationHandler$VisitorBuilder;
    addFindSourcesOperation(scope: InstrumentationHandler$VisitOperation$Scope): InstrumentationHandler$VisitorBuilder;
    addFindSourcesOperation(scope: InstrumentationHandler$VisitOperation$Scope, dontNotifyBindings: boolean): InstrumentationHandler$VisitorBuilder;
    addInsertNearestWrapperCorrectionOperationForAllBindings(scope: InstrumentationHandler$VisitOperation$Scope): boolean;
    addInsertWrapperOperationForAllBindings(scope: InstrumentationHandler$VisitOperation$Scope): InstrumentationHandler$VisitorBuilder;
    addInsertWrapperOperationForBinding(scope: InstrumentationHandler$VisitOperation$Scope, binding: EventBinding$Source<Object>): InstrumentationHandler$VisitorBuilder;
    addNotifyLoadedOperationForAllBindings(scope: InstrumentationHandler$VisitOperation$Scope): InstrumentationHandler$VisitorBuilder;
    addNotifyLoadedOperationForBinding(scope: InstrumentationHandler$VisitOperation$Scope, binding: EventBinding$Source<Object>): InstrumentationHandler$VisitorBuilder;
    buildVisitor(): InstrumentationHandler$Visitor;
}