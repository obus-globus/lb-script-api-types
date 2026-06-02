import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DigestingParser$Digester } from '../../../../org/apache/tika/parser/DigestingParser$Digester.d.ts'
export interface DigestingParser$DigesterFactory extends Object{
    build(): DigestingParser$Digester;
    isSkipContainerDocument(): boolean;
    setSkipContainerDocument(arg0: boolean): void;
}