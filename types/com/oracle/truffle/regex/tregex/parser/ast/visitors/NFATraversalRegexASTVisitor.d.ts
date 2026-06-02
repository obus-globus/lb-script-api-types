import type { RegexFlavor } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor.d.ts'
import type { Group } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Group.d.ts'
import type { GroupBoundaries } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/GroupBoundaries.d.ts'
import type { LookAheadAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAheadAssertion.d.ts'
import type { LookAroundAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAroundAssertion.d.ts'
import type { LookBehindAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookBehindAssertion.d.ts'
import type { PositionAssertion } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/PositionAssertion.d.ts'
import type { RegexAST } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTNode } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTNode.d.ts'
import type { Sequence } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Sequence.d.ts'
import type { Term } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { NFATraversalRegexASTVisitor$DeduplicationKey } from '../../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/visitors/NFATraversalRegexASTVisitor$DeduplicationKey.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export abstract class NFATraversalRegexASTVisitor extends Object {
    constructor(ast: RegexAST)
    // private ast: RegexAST;
    // private bqBypassed: number[];
    // private bqExited: number[];
    // private bqLastCounterReset: number[];
    // private bqLastZeroWidthEnter: number[];
    readonly canTraverseCaret: boolean;
    // private captureGroupClears: number[];
    // private captureGroupUpdates: number[];
    // private caretsOnPath: number;
    // private cur: RegexASTNode;
    // private curPath: number[];
    // private dedupKey: number[];
    // private dollarsOnPath: number;
    // private done: boolean;
    // private firstGroup: number;
    // private forward: boolean;
    readonly ignoreMatchBoundaryAssertions: boolean;
    // private insideEmptyGuardGroup: number[];
    // private lastGroup: number;
    // private lookAroundVisitedCount: number[];
    // private lookAroundsOnPath: number[];
    // private matchBeginAssertionsOnPath: number;
    // private matchEndAssertionsOnPath: number;
    readonly matchedConditionGroups: number[];
    // private pathDeduplicationSet: NFATraversalRegexASTVisitor$DeduplicationKey[];
    // private recalcTransitionGuards: boolean;
    // private referencedCaptureGroupsTmp: number[];
    // private referencedGroupBoundaries: number[];
    // private root: Term;
    // private shouldRetreat: boolean;
    // private transitionGuards: number[];
    // private transitionGuardsCanonicalized: number[];
    // private transitionGuardsResult: number[];
    readonly traversableLookBehindAssertions: LookBehindAssertion[];
    // private addLookAroundToVisitedSet(): void;
    // private advanceLookAround(lookAround: LookAroundAssertion): boolean;
    // private advancePositionAssertion(assertion: PositionAssertion): boolean;
    // private advanceTerm(term: Term): boolean;
    // private calcGroupBoundariesEnter(group: Group): void;
    // private calcGroupBoundariesExit(group: Group): void;
    // private calcTransitionGuards(): void;
    calcTransitionGuardsResult(): void;
    // private calculateTransitionGuards(): void;
    // private canOmitCounterCheck(guard: number): boolean;
    canPruneAfterUnconditionalFinalState(): boolean;
    canTraverseCaret(): boolean;
    // private canTraverseLookArounds(): boolean;
    // private captureGroupUpdate(boundary: number): void;
    caretsOnPath(): boolean;
    // private clearCaptureGroupData(): void;
    // private clearTransitionGuards(): void;
    // private clearsEnclosedGroups(group: Group): boolean;
    // private dedupKeyAddGroupBoundaries(boundaries: number[]): void;
    // private deduplicatePath(internal: boolean): boolean;
    // private doAdvance(): boolean;
    dollarsOnPath(): boolean;
    // private dumpPath(): void;
    dumpTransitionGuards(guards: number[]): void;
    enterLookAhead(assertion: LookAheadAssertion): void;
    // private getBoundaryIndexEnd(group: Group): number;
    // private getBoundaryIndexStart(group: Group): number;
    // private getCaptureGroupClears(): number[];
    // private getCaptureGroupUpdates(): number[];
    getCurrentMatchedConditionGroups(): number[];
    // private getFirstGroup(): number;
    getFlavor(): RegexFlavor;
    getGroupBoundaries(): GroupBoundaries;
    // private getLastGroup(): number;
    getMatchedConditionGroups(): number[];
    // private getTransitionGuards(): number[];
    getTransitionGuardsOnPath(): number[];
    getTraversableLookBehindAssertions(): LookBehindAssertion[];
    // private hasReferencedCaptureGroups(quantifiedTerm: Group): boolean;
    hasTransitionGuards(): boolean;
    isBuildingDFA(): boolean;
    // private isGroupEnterOnPath(group: Group): boolean;
    isReverse(): boolean;
    isRootEnterOnPath(): boolean;
    leaveLookAhead(assertion: LookAheadAssertion): void;
    matchBeginAssertionsOnPath(): boolean;
    matchEndAssertionsOnPath(): boolean;
    // private needsEmptyCheck(group: Group): boolean;
    needsMaintainGuard(): number;
    // private needsUpdateCGStepByStep(group: Group): boolean;
    // private needsZeroWidthEscape(group: Group): boolean;
    // private pathGetNode(pathElement: number): RegexASTNode;
    // private pathGroupGetNext(pathElement: number): Sequence;
    // private pathGroupHasNext(pathElement: number): boolean;
    // private popGroupEnter(): number;
    // private popGroupEscape(group: Group): void;
    // private popGroupExit(): void;
    // private popGroupPassThrough(): number;
    // private popLookAround(node: RegexASTNode, pathElement: number): void;
    // private popPositionAssertion(node: RegexASTNode): void;
    // private pushGroupEnter(group: Group, groupAltIndex: number): void;
    // private pushGroupEscape(group: Group): void;
    // private pushGroupExit(group: Group): void;
    // private pushGroupPassThrough(group: Group, groupAltIndex: number): void;
    // private pushRecursiveBackrefUpdates(group: Group): void;
    // private pushTransitionGuard(guard: number): void;
    // private removeLookAroundFromVisitedSet(pathElement: number): void;
    // private retreat(): boolean;
    run(runRoot: Term): void;
    setCanTraverseCaret(canTraverseCaret: boolean): void;
    setIgnoreMatchBoundaryAssertions(ignoreMatchBoundaryAssertions: boolean): void;
    setMatchedConditionGroups(matchedConditionGroups: number[]): void;
    setReverse(reverse: boolean): void;
    // private setShouldRetreat(): void;
    setTraversableLookBehindAssertions(traversableLookBehindAssertions: LookBehindAssertion[]): void;
    // private shouldKeepGuard(guard: number, guardPosition: number): boolean;
    // private switchEnterToPassThrough(group: Group): void;
    // private switchExitToEscape(group: Group): void;
    // private switchNextGroupAlternative(group: Group): void;
    // private updatesLastGroupField(group: Group): boolean;
    visit(target: RegexASTNode): void;
}