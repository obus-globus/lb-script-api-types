import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { DumperOptions } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions.d.ts'
import type { DumperOptions$ScalarStyle } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$ScalarStyle.d.ts'
import type { DumperOptions$Version } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$Version.d.ts'
import type { CommentEventsCollector } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentEventsCollector.d.ts'
import type { CommentLine } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/comments/CommentLine.d.ts'
import type { Emitable } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/emitter/Emitable.d.ts'
import type { EmitterState } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/emitter/EmitterState.d.ts'
import type { ScalarAnalysis } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/emitter/ScalarAnalysis.d.ts'
import type { Event } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/events/Event.d.ts'
import type { ArrayStack } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/util/ArrayStack.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class Emitter extends Object implements Emitable {
    static MAX_INDENT: number;
    static MIN_INDENT: number;
    constructor(arg0: Writer, arg1: DumperOptions)
    // private allowUnicode: boolean;
    // private analysis: ScalarAnalysis;
    // private bestIndent: number;
    // private bestLineBreak: string[];
    // private bestWidth: number;
    // private blockCommentsCollector: CommentEventsCollector;
    // private canonical: boolean;
    // private column: number;
    // private emitComments: boolean;
    // private event: Event;
    // private events: Event[];
    // private flowLevel: number;
    // private indent: number;
    // private indentWithIndicator: boolean;
    // private indention: boolean;
    // private indents: ArrayStack<number>;
    // private indicatorIndent: number;
    // private inlineCommentsCollector: CommentEventsCollector;
    // private mappingContext: boolean;
    // private maxSimpleKeyLength: number;
    // private openEnded: boolean;
    // private preparedAnchor: string;
    // private preparedTag: string;
    // private prettyFlow: boolean;
    // private rootContext: boolean;
    // private simpleKeyContext: boolean;
    // private splitLines: boolean;
    // private state: EmitterState;
    // private states: ArrayStack<EmitterState>;
    // private stream: Writer;
    // private style: DumperOptions$ScalarStyle;
    // private tagPrefixes: JavaMap<string, string>;
    // private whitespace: boolean;
    // private analyzeScalar(arg0: string): ScalarAnalysis;
    // private checkEmptyDocument(): boolean;
    // private checkEmptyMapping(): boolean;
    // private checkEmptySequence(): boolean;
    // private checkSimpleKey(): boolean;
    // private chooseScalarStyle(): DumperOptions$ScalarStyle;
    // private determineBlockHints(arg0: string): string;
    emit(arg0: Event): void;
    // private expectAlias(): void;
    // private expectBlockMapping(): void;
    // private expectBlockSequence(): void;
    // private expectFlowMapping(): void;
    // private expectFlowSequence(): void;
    // private expectNode(arg0: boolean, arg1: boolean, arg2: boolean): void;
    // private expectScalar(): void;
    flushStream(): void;
    // private increaseIndent(arg0: boolean, arg1: boolean): void;
    // private isFoldedOrLiteral(arg0: Event): boolean;
    // private needEvents(arg0: Iterator<Event>, arg1: number): boolean;
    // private needMoreEvents(): boolean;
    // private prepareTag(arg0: string): string;
    // private prepareTagHandle(arg0: string): string;
    // private prepareTagPrefix(arg0: string): string;
    // private prepareVersion(arg0: DumperOptions$Version): string;
    // private processAnchor(arg0: string): void;
    // private processScalar(): void;
    // private processTag(): void;
    // private writeBlockComment(): void;
    // private writeCommentLines(arg0: CommentLine[]): boolean;
    // private writeDoubleQuoted(arg0: string, arg1: boolean): void;
    writeFolded(arg0: string, arg1: boolean): void;
    writeIndent(): void;
    writeIndicator(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean): void;
    // private writeInlineComments(): boolean;
    // private writeLineBreak(arg0: string): void;
    writeLiteral(arg0: string): void;
    writePlain(arg0: string, arg1: boolean): void;
    // private writeSingleQuoted(arg0: string, arg1: boolean): void;
    writeStreamEnd(): void;
    writeStreamStart(): void;
    writeTagDirective(arg0: string, arg1: string): void;
    writeVersionDirective(arg0: string): void;
    // private writeWhitespace(arg0: number): void;
}