import type { Rectangle } from '../../../java/awt/Rectangle.d.ts'
import type { TextHitInfo } from '../../../java/awt/font/TextHitInfo.d.ts'
import type { AttributedCharacterIterator } from '../../../java/text/AttributedCharacterIterator.d.ts'
import type { AttributedCharacterIterator$Attribute } from '../../../java/text/AttributedCharacterIterator$Attribute.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface InputMethodRequests extends Object{
    cancelLatestCommittedText(arg0: AttributedCharacterIterator$Attribute[]): AttributedCharacterIterator;
    getCommittedText(arg0: number, arg1: number, arg2: AttributedCharacterIterator$Attribute[]): AttributedCharacterIterator;
    getCommittedTextLength(): number;
    getInsertPositionOffset(): number;
    getLocationOffset(arg0: number, arg1: number): TextHitInfo;
    getSelectedText(arg0: AttributedCharacterIterator$Attribute[]): AttributedCharacterIterator;
    getTextLocation(arg0: TextHitInfo): Rectangle;
}