import type { OpenURIEvent } from '../../../java/awt/desktop/OpenURIEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface OpenURIHandler extends Object{
    openURI(arg0: OpenURIEvent): void;
}