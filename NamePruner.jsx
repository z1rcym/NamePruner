// 選択したレイヤーを取得
var comp = app.project.activeItem;
if (comp && comp instanceof CompItem) {
    var selectedLayers = comp.selectedLayers;

    if (selectedLayers.length > 0) {
        // テキスト入力ダイアログを表示
        var searchText = prompt("削除したいテキストを入力してください", "");

        if (searchText !== null && searchText !== "") {
            app.beginUndoGroup("Remove Text from Layer Names");

            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];
                var layerName = layer.name;

                // レイヤー名に含まれる指定テキストを削除
                if (layerName.indexOf(searchText) !== -1) {
                    var newName = layerName.replace(searchText, "");
                    layer.name = newName;
                }
            }

            app.endUndoGroup();
        } else {
            alert("無効なテキストが入力されました。");
        }
    } else {
        alert("レイヤーが選択されていません。");
    }
} else {
    alert("コンポジションがアクティブではありません。");
}