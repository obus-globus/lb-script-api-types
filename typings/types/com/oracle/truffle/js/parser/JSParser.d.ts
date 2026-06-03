import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { ScriptNode } from '../../../../../com/oracle/truffle/js/nodes/ScriptNode.d.ts'
import type { SnapshotProvider } from '../../../../../com/oracle/truffle/js/parser/SnapshotProvider.d.ts'
import type { Evaluator } from '../../../../../com/oracle/truffle/js/runtime/Evaluator.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface JSParser extends Evaluator, Object{
    parseScript(context: JSContext, source: Source): ScriptNode;
    parseScript(context: JSContext, source: Source, snapshotProvider: SnapshotProvider): ScriptNode;
    parseScript(context: JSContext, source: Source, binary: ByteBuffer): ScriptNode;
    parseScript(context: JSContext, source: Source, prolog: string, epilog: string, isStrict: boolean): ScriptNode;
    parseScript(context: JSContext, source: Source): ScriptNode;
    parseScript(context: JSContext, source: Source, prolog: string, epilog: string, isStrict: boolean): ScriptNode;
}