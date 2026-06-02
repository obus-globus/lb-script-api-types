import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface EventPostVisitSections extends Object{
    onPostVisit(node: Node, section: SourceSection, resetSections: SourceSection[]): void;
}