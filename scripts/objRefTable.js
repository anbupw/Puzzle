const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Behaviors.Timer,
		C3.Behaviors.Tween,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.AdvancedRandom,
		C3.Plugins.LocalStorage,
		C3.Plugins.Arr,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Behaviors.Bullet,
		C3.Plugins.TiledBg,
		C3.Behaviors.Flash,
		C3.Plugins.Particles,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Behaviors.Tween.Acts.StopAllTweens,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.replace,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Arr.Exps.AsJSON,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.IID,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Cnds.OnCreated,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Text.Cnds.CompareX,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Text.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.TiledBg.Cnds.CompareInstanceVar,
		C3.Plugins.TiledBg.Acts.SetImageOffsetX,
		C3.Plugins.TiledBg.Exps.ImageOffsetX,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.TiledBg.Acts.SetOpacity,
		C3.Behaviors.Bullet.Exps.Speed,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Plugins.Particles.Acts.SetPos,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.TiledBg.Exps.Width,
		C3.Plugins.TiledBg.Exps.Y,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Acts.RemoveFromParent,
		C3.Plugins.TiledBg.Acts.SetInstanceVar,
		C3.Plugins.Audio.Acts.FadeVolume,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetEffectParam,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Particles.Acts.MoveToBottom,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Behaviors.Tween.Cnds.IsAnyPlaying,
		C3.Behaviors.Tween.Cnds.OnAnyTweensFinished,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.System.Exps.len,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.AdvancedRandom.Acts.AddProbabilityEntry,
		C3.Plugins.AdvancedRandom.Exps.Weighted,
		C3.Plugins.System.Exps.left,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Exps.right,
		C3.Plugins.System.Exps.mid,
		C3.Plugins.Text.Acts.SetFontColor
	];
};
self.C3_JsPropNameTable = [
	{TXT_History: 0},
	{Local: 0},
	{TXT_Info: 0},
	{TXT_Money: 0},
	{TXT_xxx: 0},
	{Timer: 0},
	{Tween: 0},
	{TXT_Partida: 0},
	{TXT_History_V: 0},
	{TXT_History_V2: 0},
	{TXT_Play: 0},
	{Audio: 0},
	{Keyboard: 0},
	{Mouse: 0},
	{Touch: 0},
	{AdvancedRandom: 0},
	{LocalStorage: 0},
	{"0_History_H": 0},
	{"0_History_V": 0},
	{W: 0},
	{H: 0},
	{Fun: 0},
	{BTN_Config: 0},
	{BTN_Play: 0},
	{BTN_Sound: 0},
	{IMG_Block: 0},
	{num: 0},
	{OBJ_History: 0},
	{Slid_Historic: 0},
	{IMG_Barr: 0},
	{Sine: 0},
	{Sine2: 0},
	{OBJ_Player: 0},
	{IMG_xxx: 0},
	{sp: 0},
	{Bullet: 0},
	{IMG_Nuvem: 0},
	{IMG_BG: 0},
	{Ativo: 0},
	{IMG_Regua: 0},
	{IMG_01: 0},
	{IMG_HudProgressbar: 0},
	{OBJ_ProgressBar: 0},
	{IMG_Ref: 0},
	{IMG_xx: 0},
	{OBJ_Slid_V: 0},
	{BG: 0},
	{Flash: 0},
	{HUD_Money: 0},
	{IMG_History: 0},
	{IMG_Logo_0: 0},
	{IMG_Logo_1: 0},
	{IMG_Logo_2: 0},
	{IMG_Logo_3: 0},
	{IMG_Logo_4: 0},
	{IMG_Logo_5: 0},
	{IMG_Logo_6: 0},
	{Particles_Logo: 0},
	{Particles: 0},
	{Particles2: 0},
	{Particles3: 0},
	{type: 0},
	{TXT: 0},
	{loading: 0},
	{Text_error_api: 0},
	{Button: 0},
	{Auto_Manual: 0},
	{QTD_Auto: 0},
	{ValorBet_Fixa: 0},
	{ValorBet_Variavel: 0},
	{Valor_TotalBet: 0},
	{Stop: 0},
	{Payout: 0},
	{Jogando: 0},
	{N: 0},
	{Valor: 0},
	{ValorX: 0},
	{PX: 0},
	{PY: 0},
	{transform: 0},
	{Money: 0},
	{Money_Efeito: 0},
	{Dif: 0},
	{Adicionando_Removendo: 0},
	{L: 0},
	{Text_money: 0},
	{Multiplicador: 0},
	{x_valor: 0},
	{y_valor: 0},
	{chance: 0},
	{transfor_text: 0},
	{Partida: 0},
	{Game_Mult: 0},
	{Round_Partida: 0},
	{v: 0}
];

self.InstanceType = {
	TXT_History: class extends self.ITextInstance {},
	TXT_Info: class extends self.ITextInstance {},
	TXT_Money: class extends self.ITextInstance {},
	TXT_xxx: class extends self.ITextInstance {},
	TXT_Partida: class extends self.ITextInstance {},
	TXT_History_V: class extends self.ITextInstance {},
	TXT_History_V2: class extends self.ITextInstance {},
	TXT_Play: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	AdvancedRandom: class extends self.IInstance {},
	LocalStorage: class extends self.IInstance {},
	_0_History_H: class extends self.IArrayInstance {},
	_0_History_V: class extends self.IArrayInstance {},
	BTN_Config: class extends self.ISpriteInstance {},
	BTN_Play: class extends self.ISpriteInstance {},
	BTN_Sound: class extends self.ISpriteInstance {},
	IMG_Block: class extends self.ISpriteInstance {},
	OBJ_History: class extends self.ISpriteInstance {},
	Slid_Historic: class extends self.ISpriteInstance {},
	IMG_Barr: class extends self.ISpriteInstance {},
	OBJ_Player: class extends self.ISpriteInstance {},
	IMG_xxx: class extends self.ISpriteInstance {},
	IMG_Nuvem: class extends self.ISpriteInstance {},
	IMG_BG: class extends self.ITiledBackgroundInstance {},
	IMG_Regua: class extends self.ITiledBackgroundInstance {},
	IMG_01: class extends self.ISpriteInstance {},
	IMG_HudProgressbar: class extends self.ISpriteInstance {},
	OBJ_ProgressBar: class extends self.ITiledBackgroundInstance {},
	IMG_Ref: class extends self.ISpriteInstance {},
	IMG_xx: class extends self.ITiledBackgroundInstance {},
	OBJ_Slid_V: class extends self.ISpriteInstance {},
	BG: class extends self.ISpriteInstance {},
	HUD_Money: class extends self.ISpriteInstance {},
	IMG_History: class extends self.ISpriteInstance {},
	IMG_Logo_0: class extends self.ISpriteInstance {},
	IMG_Logo_1: class extends self.ITiledBackgroundInstance {},
	IMG_Logo_2: class extends self.ISpriteInstance {},
	IMG_Logo_3: class extends self.ISpriteInstance {},
	IMG_Logo_4: class extends self.ITiledBackgroundInstance {},
	IMG_Logo_5: class extends self.ITiledBackgroundInstance {},
	IMG_Logo_6: class extends self.ITiledBackgroundInstance {},
	Particles_Logo: class extends self.IParticlesInstance {},
	Particles: class extends self.IParticlesInstance {},
	Particles2: class extends self.IParticlesInstance {},
	Particles3: class extends self.IParticlesInstance {},
	TXT: class extends self.ITextInstance {},
	loading: class extends self.ISpriteInstance {},
	Text_error_api: class extends self.ITextInstance {},
	Button: class extends self.ISpriteInstance {}
}