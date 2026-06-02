import type { PreferencesEvent } from '../../../java/awt/desktop/PreferencesEvent.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PreferencesHandler extends Object{
    handlePreferences(arg0: PreferencesEvent): void;
}