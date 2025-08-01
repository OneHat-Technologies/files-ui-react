'use strict';



function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray$1(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * Gives a XX.XX format in Bytes KB, MB, GB or TB
 * @param fileSize file size to give format in Bytes
 */
var fileSizeFormater = function (fileSize) {
    var result = "";
    if (!fileSize) {
        return undefined;
    }
    if (fileSize < 1024) {
        result = fileSize + " Bytes";
    }
    else {
        //KB
        if (fileSize < 1024 * 1024) {
            result = (fileSize / 1024).toFixed(2) + " KB";
        }
        else if (fileSize < 1024 * 1024 * 1024) {
            result = ((fileSize / 1024) / 1024).toFixed(2) + " MB";
        }
        else if (fileSize < 1024 * 1024 * 1024 * 1024) {
            result = (((fileSize / 1024) / 1024) / 1024).toFixed(2) + " GB";
        }
        else {
            result = ((((fileSize / 1024) / 1024) / 1024) / 1024).toFixed(2) + " TB";
        }
    }
    return result;
};

/**
 * Italian translation for Dropzone component
 */
var DropzoneItalian = {
    defaultLabel: "Trascina qui i tuoi file",
    uploadingMessage: function (amountOfFiles) { return "Caricamento di ".concat(amountOfFiles, " file"); },
    uploadFinished: function (uploaded, rejected) { return "File caricati: ".concat(uploaded, ", File rifiutati: ").concat(rejected); },
    noFilesMessage: "Nessun file valido in attesa di essere caricato",
    footer: {
        acceptAll: "Tutti i tipi di file sono accettati",
        acceptCustom: function (accept) { return "Tipi di file consentiti: ".concat(accept); }
    },
    header: {
        uploadFilesMessage: "Caricamento",
        maxSizeMessage: function (maxFileSize) { return "Dimensione massima ".concat(maxFileSize); },
        validFilesMessage: function (numberOfValidFiles, maxFiles) { return "File  ".concat(numberOfValidFiles, "/").concat(maxFiles); }
    },
    fakeuploadsuccess: "Il file è stato caricato con successo ",
    fakeUploadError: "Errore di caricamento del file",
};
/**
 * Italian translation for FileItem component
 */
var FileItemItalian = {
    fullInfoLayer: {
        name: "Nome: ",
        size: "Dimensione: ",
        type: "Tipo: "
    },
    status: {
        preparing: "preparazione",
        uploading: "In corso",
        success: "Successo",
        valid: "Valido",
        denied: "Non válido",
        error: "Errore",
        aborted: "Interrotto"
    },
};
/**
 * Italian translation for Validation Errors
 */
var ValidateErrorItalian = {
    maxSizeError: function (maxSize) { return "Il file \u00E8 molto grande. Il tam. il massimo \u00E8 ".concat(fileSizeFormater(maxSize)); },
    acceptError: "Tipo di file illegale",
    maxFileCount: function (maxFiles) { return "Numero massimo di file (".concat(maxFiles, ") raggiunto"); }
};

/**
 * French translation for Dropzone component
 */
var DropzoneFrench = {
    defaultLabel: "Déposez vos fichiers ici",
    uploadingMessage: function (amountOfFiles) { return "Envoi de ".concat(amountOfFiles, " fichiers"); },
    uploadFinished: function (uploaded, rejected) { return "Fichiers t\u00E9l\u00E9charg\u00E9s : ".concat(uploaded, ", Fichiers rejet\u00E9s: ").concat(rejected); },
    noFilesMessage: "Aucun fichier valide ne manque",
    footer: {
        acceptAll: "Tous types de fichiers accept\u00E9s ",
        acceptCustom: function (accept) { return "Types de fichier: ".concat(accept); }
    },
    header: {
        uploadFilesMessage: "Envoyer",
        maxSizeMessage: function (maxFileSize) { return "Taille maximale ".concat(maxFileSize); },
        validFilesMessage: function (numberOfValidFiles, maxFiles) { return "Fichiers  ".concat(numberOfValidFiles, "/").concat(maxFiles); }
    },
    fakeuploadsuccess: "Le fichier a été téléchargé avec succès",
    fakeUploadError: "Erreur lors du téléchargement ",
};
/**
 * French translation for FileItem component
 */
var FileItemFrench = {
    fullInfoLayer: {
        name: "Le nom: ",
        size: "Le taille: ",
        type: "Le type: "
    },
    status: {
        preparing: "préparer",
        uploading: "En cours",
        success: "Succès",
        valid: "Valide",
        denied: "Refusé",
        error: "Erreur",
        aborted: "Interrompu"
    },
};
/**
 * French translation for Validation Errors
 */
var ValidateErrorFrench = {
    maxSizeError: function (maxSize) { return "Le fichier est tr\u00E8s volumineux. Le tam. le maximum est de ".concat(fileSizeFormater(maxSize)); },
    acceptError: "Type de fichier ill\u00E9gal ",
    maxFileCount: function (maxFiles) { return "Limite de fichiers atteinte (".concat(maxFiles, ")"); }
};

/**
 * English translation for Dropzone component
 */
var DropzoneEnglish = {
    defaultLabel: "Drop your files here",
    uploadingMessage: function (amountOfFiles) { return "Uploading ".concat(amountOfFiles, " files"); },
    uploadFinished: function (uploaded, rejected) { return "Uploaded files: ".concat(uploaded, ", Rejected files: ").concat(rejected); },
    noFilesMessage: "There is no missing valid file to upload",
    footer: {
        acceptAll: "All file types accepted",
        acceptCustom: function (accept) { return "Allowed types: ".concat(accept); }
    },
    header: {
        uploadFilesMessage: "Upload files",
        maxSizeMessage: function (maxFileSize) { return "Max file size: ".concat(maxFileSize); },
        validFilesMessage: function (numberOfValidFiles, maxFiles) { return "Files ".concat(numberOfValidFiles, "/").concat(maxFiles); }
    },
    fakeuploadsuccess: "File was successfuly uploaded",
    fakeUploadError: "Error on uploading. Please try again later.",
};
/**
 * English translation for FileItem component
 */
var FileItemEnglish = {
    fullInfoLayer: {
        name: "Name: ",
        size: "Size: ",
        type: "Type: "
    },
    status: {
        preparing: "Preparing",
        uploading: "Uploading",
        success: "Success",
        valid: "Valid",
        denied: "Not valid",
        error: "Error",
        aborted: "Aborted"
    },
};
/**
 * English translation for Validation Errors
 */
var ValidateErrorEnglish = {
    maxSizeError: function (maxSize) {
        return "File is too big. Max file size allowed is ".concat(fileSizeFormater(maxSize));
    },
    acceptError: "File type is not allowed",
    maxFileCount: function (maxFiles) {
        return "Max amount of files (".concat(maxFiles, ") has been reached");
    }
};

/**
 * Spanish translation for Dropzone component
 */
var DropzoneSpanish = {
    defaultLabel: "Suelta tus archivos aquí",
    uploadingMessage: function (amountOfFiles) { return "Subiendo ".concat(amountOfFiles, " archivos"); },
    uploadFinished: function (uploaded, rejected) { return "Archivos subidos: ".concat(uploaded, ", Archivos rechazados: ").concat(rejected); },
    noFilesMessage: "No hay archivos v\u00E1lidos pendientes por subir",
    footer: {
        acceptAll: "Todos los tipos de archivo aceptados",
        acceptCustom: function (accept) { return "Tipo(s) de archivo permitidos: ".concat(accept); }
    },
    header: {
        uploadFilesMessage: "Subir",
        maxSizeMessage: function (maxFileSize) { return "Tam. m\u00E1ximo ".concat(maxFileSize); },
        validFilesMessage: function (numberOfValidFiles, maxFiles) { return "Archivos ".concat(numberOfValidFiles, "/").concat(maxFiles); }
    },
    fakeuploadsuccess: "El archivo se subió correctamente",
    fakeUploadError: "Error al subir el archivo",
};
/**
 * Spanish translation for FileItem component
 */
var FileItemSpanish = {
    fullInfoLayer: {
        name: "Nombre: ",
        size: "Tamaño: ",
        type: "Tipo: "
    },
    status: {
        preparing: "Preparando",
        uploading: "Subiendo",
        success: "Éxito",
        valid: "Válido",
        denied: "No válido",
        error: "Error",
        aborted: "Anulado"
    },
};
/**
 * Spanish translation for Validation Errors
 */
var ValidateErrorSpanish = {
    maxSizeError: function (maxSize) { return "El archivo es muy grande. El tam. m\u00E1ximo es ".concat(fileSizeFormater(maxSize)); },
    acceptError: "Tipo de archivo no permitido",
    maxFileCount: function (maxFiles) { return "Cantidad m\u00E1xima de archivos (".concat(maxFiles, ") alcanzada"); }
};

/**
 * Russian translation for Dropzone component
 */
var DropzoneRussian = {
    defaultLabel: "Перетащите сюда свои файлы.",
    uploadingMessage: function (amountOfFiles) { return "\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 ".concat(amountOfFiles, " \u0444\u0430\u0439\u043B\u043E\u0432"); },
    uploadFinished: function (uploaded, rejected) { return "\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0444\u0430\u0439\u043B\u043E\u0432: ".concat(uploaded, ", \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u043D\u044B\u0445 \u0444\u0430\u0439\u043B\u043E\u0432: ").concat(rejected); },
    noFilesMessage: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u043D\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438",
    footer: {
        acceptAll: "\u041F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0442\u0441\u044F \u0432\u0441\u0435 \u0442\u0438\u043F\u044B \u0444\u0430\u0439\u043B\u043E\u0432 ",
        acceptCustom: function (accept) { return "\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0435 \u0442\u0438\u043F\u044B: ".concat(accept); }
    },
    header: {
        uploadFilesMessage: "Отправить",
        maxSizeMessage: function (maxFileSize) { return "\u043C\u0430\u043A\u0441 \u0440\u0430\u0437\u043C\u0435\u0440: ".concat(maxFileSize); },
        validFilesMessage: function (numberOfValidFiles, maxFiles) { return "\u0424\u0430\u0439\u043B\u044B ".concat(numberOfValidFiles, "/").concat(maxFiles); }
    },
    fakeuploadsuccess: "Файл был успешно загружен",
    fakeUploadError: "Ошибка при загрузке",
};
/**
 * Russian translation for FileItem component
 *
 */
var FileItemRussian = {
    fullInfoLayer: {
        name: "\u0418\u043C\u044F: ",
        size: "Размер: ",
        type: "Tип: "
    },
    status: {
        preparing: "подготовка",
        uploading: "Загрузка",
        success: "успех",
        valid: "годный",
        denied: "выкинутый",
        error: "ошибка",
        aborted: "прерванный"
    },
};
/**
 * Russian translation for Validation Errors
 */
var ValidateErrorRussian = {
    maxSizeError: function (maxSize) {
        return "\u0424\u0430\u0439\u043B \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0439. \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 - ".concat(fileSizeFormater(maxSize));
    },
    acceptError: "\u0422\u0438\u043F \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D",
    maxFileCount: function (maxFiles) {
        return "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0443\u0442\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0444\u0430\u0439\u043B\u043E\u0432 (".concat(maxFiles, ")");
    }
};

/**
 * Portuguese translation for Dropzone
 */
var DropzonePortuguese = {
    defaultLabel: "Solte seus arquivos aqui ",
    uploadingMessage: function (amountOfFiles) { return "Enviando ".concat(amountOfFiles, " arquivos"); },
    uploadFinished: function (uploaded, rejected) { return "Arquivos enviados: ".concat(uploaded, ", Arquivos rejeitados: ").concat(rejected); },
    noFilesMessage: "Nenhum arquivo v\u00E1lido est\u00E1 faltando para enviar",
    footer: {
        acceptAll: "Todos os tipos de arquivo s\u00E3o aceitos",
        acceptCustom: function (accept) { return "Tipos permitidos: ".concat(accept); }
    },
    header: {
        uploadFilesMessage: "Enviar",
        maxSizeMessage: function (maxFileSize) { return "Tamanho m\u00E1ximo: ".concat(maxFileSize); },
        validFilesMessage: function (numberOfValidFiles, maxFiles) { return "Arquivos ".concat(numberOfValidFiles, "/").concat(maxFiles); }
    },
    fakeuploadsuccess: "O arquivo foi enviado com sucesso",
    fakeUploadError: "Erro ao enviar",
};
/**
 * Portuguese translation for FileItem component
 */
var FileItemPortuguese = {
    fullInfoLayer: {
        name: "Nome: ",
        size: "Tamanho: ",
        type: "Tipo: "
    },
    status: {
        preparing: "Preparando",
        uploading: "Enviando",
        success: "Êxito",
        valid: "válido",
        denied: "Negado",
        error: "Erro",
        aborted: "Abortado"
    },
};
/**
 * Portuguese translation for Validation Errors
 */
var ValidateErrorPortuguese = {
    maxSizeError: function (maxSize) { return "O arquivo \u00E9 muito grande. O tamanho m\u00E1ximo de arquivo permitido \u00E9 ".concat(fileSizeFormater(maxSize)); },
    acceptError: "O tipo de arquivo n\u00E3o \u00E9 permitido ",
    maxFileCount: function (maxFiles) { return "Quantidade m\u00E1xima de arquivos (".concat(maxFiles, ") alcan\u00E7ada"); }
};

/**
 * English translation for Dropzone component
 */
var DropzoneSimplifiedChinese = {
    defaultLabel: "将您的文件放在这里",
    uploadingMessage: function (amountOfFiles) { return "\u4E0A\u4F20 ".concat(amountOfFiles, " \u4E2A\u6587\u4EF6"); },
    uploadFinished: function (uploaded, rejected) { return "\u4E0A\u4F20\u6587\u4EF6\uFF1A".concat(uploaded, "\uFF0C\u62D2\u7EDD\u6587\u4EF6\uFF1A").concat(rejected); },
    noFilesMessage: "\u6CA1\u6709\u7F3A\u5C11\u8981\u52A0\u8F7D\u7684\u6709\u6548\u6587\u4EF6",
    footer: {
        acceptAll: "\u63A5\u53D7\u6240\u6709\u6587\u4EF6\u7C7B\u578B",
        acceptCustom: function (accept) { return "\u5141\u8BB8\u7684\u7C7B\u578B: ".concat(accept); }
    },
    header: {
        uploadFilesMessage: "上传文件",
        maxSizeMessage: function (maxFileSize) { return "\u6700\u5927\u6587\u4EF6\u5927\u5C0F\uFF1A".concat(maxFileSize); },
        validFilesMessage: function (numberOfValidFiles, maxFiles) { return "\u6587\u6863 ".concat(numberOfValidFiles, "/").concat(maxFiles); }
    },
    fakeuploadsuccess: "文件已成功上传",
    fakeUploadError: "上传时出错",
};
/**
 * Chinnese translation for FileItem component
 */
var FileItemSimplifiedChinese = {
    fullInfoLayer: {
        name: "\u6587\u6863\u540D\u79F0: ",
        size: "尺寸: ",
        type: "文件类型: "
    },
    status: {
        preparing: "预加载",
        uploading: "上传",
        success: "成功",
        valid: "接受的文件",
        denied: "被拒绝的文件",
        error: "错误",
        aborted: "中止"
    },
};
/**
 * English translation for Validation Errors
 */
var ValidateErrorSimplifiedChinese = {
    maxSizeError: function (maxSize) {
        return "\u6587\u4EF6\u592A\u5927\u3002 \u5141\u8BB8\u7684\u6700\u5927\u6587\u4EF6\u5927\u5C0F\u4E3A ".concat(fileSizeFormater(maxSize));
    },
    acceptError: "\u6587\u4EF6\u7C7B\u578B\u4E0D\u5141\u8BB8",
    maxFileCount: function (maxFiles) {
        return "\u5DF2\u8FBE\u5230\u6700\u5927\u6587\u4EF6\u6570 (".concat(maxFiles, ")");
    }
};

/**
 * English translation for Dropzone component
 */
var DropzoneTraditionalChinese = {
    defaultLabel: "把你的文件放在這裡 ",
    uploadingMessage: function (amountOfFiles) { return "\u4E0A\u50B3".concat(amountOfFiles, "\u500B\u6587\u4EF6"); },
    uploadFinished: function (uploaded, rejected) { return "\u4E0A\u50B3\u6587\u4EF6: ".concat(uploaded, ", \u62D2\u7D55\u7684\u6587\u4EF6\uFF1A").concat(rejected); },
    noFilesMessage: "\u6C92\u6709\u7F3A\u5C11\u8981\u4E0A\u50B3\u7684\u6709\u6548\u6587\u4EF6",
    footer: {
        acceptAll: "\u63A5\u53D7\u6240\u6709\u6587\u4EF6\u985E\u578B",
        acceptCustom: function (accept) { return "\u5141\u8A31\u7684\u985E\u578B\uFF1A".concat(accept); }
    },
    header: {
        uploadFilesMessage: "上傳文件",
        maxSizeMessage: function (maxFileSize) { return "\u6700\u5927\u6587\u4EF6\u5927\u5C0F\uFF1A".concat(maxFileSize); },
        validFilesMessage: function (numberOfValidFiles, maxFiles) { return " \u6587\u4EF6 ".concat(numberOfValidFiles, "/").concat(maxFiles); }
    },
    fakeuploadsuccess: "文件已成功上傳",
    fakeUploadError: "上傳時出錯",
};
/**
 * Chinese translation for FileItem component
 */
var FileItemTraditionalChinese = {
    fullInfoLayer: {
        name: "\u6587\u6A94\u540D\u7A31: ",
        size: "文件大小: ",
        type: "文件類型: "
    },
    status: {
        preparing: "預加載",
        uploading: "上傳",
        success: "成功",
        valid: "有效文件",
        denied: "無效文件",
        error: "錯誤",
        aborted: "中止"
    },
};
/**
 * English translation for Validation Errors
 */
var ValidateErrorTraditionalChinese = {
    maxSizeError: function (maxSize) {
        return "\u6587\u4EF6\u592A\u5927\u3002 \u5141\u8A31\u7684\u6700\u5927\u6587\u4EF6\u5927\u5C0F\u70BA ".concat(fileSizeFormater(maxSize));
    },
    acceptError: "\u6587\u4EF6\u985E\u578B\u4E0D\u5141\u8A31",
    maxFileCount: function (maxFiles) {
        return "\u5DF2\u9054\u5230\u6700\u5927\u6587\u4EF6\u6578 (".concat(maxFiles, ")");
    }
};

var FileItemLocalizer = {
    "ES-es": FileItemSpanish,
    "EN-en": FileItemEnglish,
    "FR-fr": FileItemFrench,
    "IT-it": FileItemItalian,
    "PT-pt": FileItemPortuguese,
    "RU-ru": FileItemRussian,
    "ZH-cn": FileItemSimplifiedChinese,
    "ZH-hk": FileItemTraditionalChinese
};
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
var FileItemLocalizerSelector = function (local) {
    switch (local) {
        case "ES-es": return FileItemLocalizer["ES-es"];
        case "EN-en": return FileItemLocalizer["EN-en"];
        case "FR-fr": return FileItemLocalizer["FR-fr"];
        case "IT-it": return FileItemLocalizer["IT-it"];
        case "PT-pt": return FileItemLocalizer["PT-pt"];
        case "RU-ru": return FileItemLocalizer["RU-ru"];
        case "ZH-cn": return FileItemLocalizer["ZH-cn"];
        case "ZH-hk": return FileItemLocalizer["ZH-hk"];
        default: return FileItemLocalizer["EN-en"];
    }
};

var DropzoneLocalizer = {
    "ES-es": DropzoneSpanish,
    "EN-en": DropzoneEnglish,
    "FR-fr": DropzoneFrench,
    "IT-it": DropzoneItalian,
    "PT-pt": DropzonePortuguese,
    "RU-ru": DropzoneRussian,
    "ZH-cn": DropzoneSimplifiedChinese,
    "ZH-hk": DropzoneTraditionalChinese
};
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
var DropzoneLocalizerSelector = function (local) {
    switch (local) {
        case "ES-es": return DropzoneLocalizer["ES-es"];
        case "EN-en": return DropzoneLocalizer["EN-en"];
        case "FR-fr": return DropzoneLocalizer["FR-fr"];
        case "IT-it": return DropzoneLocalizer["IT-it"];
        case "PT-pt": return DropzoneLocalizer["PT-pt"];
        case "RU-ru": return DropzoneLocalizer["RU-ru"];
        case "ZH-cn": return DropzoneLocalizer["ZH-cn"];
        case "ZH-hk": return DropzoneLocalizer["ZH-hk"];
        default: return DropzoneLocalizer["EN-en"];
    }
};

var ValidateErrorLocalizer = {
    "ES-es": ValidateErrorSpanish,
    "EN-en": ValidateErrorEnglish,
    "FR-fr": ValidateErrorFrench,
    "IT-it": ValidateErrorItalian,
    "PT-pt": ValidateErrorPortuguese,
    "RU-ru": ValidateErrorRussian,
    "ZH-cn": ValidateErrorSimplifiedChinese,
    "ZH-hk": ValidateErrorTraditionalChinese,
};
/**
 * Secure translation through a selector
 * @param local the Localization
 * @returns a ComponentLocalizer object that contains the translation
 */
var ValidateErrorLocalizerSelector = function (local) {
    if (!local || !["ES-es", "EN-en", "FR-fr", "IT-it", "PT-pt", "RU-ru", "ZH-cn", "ZH-hk"].includes(local)) {
        return ValidateErrorLocalizer["EN-en"];
    }
    return ValidateErrorLocalizer[local];
};

/**
 * Reads an image (or other type) file as data URL in a promise way,
 * so you can use await.
 * It will return a string that contains the URL representation
 * @param file File or Blob object
 * @returns data URL of the file
 */
var readAsDataURL = function (file, onProgress, onError) {
    return new Promise(function (resolve, reject) {
        try {
            var reader_1 = new FileReader();
            reader_1.onprogress = function () {
                onProgress === null || onProgress === void 0 ? void 0 : onProgress();
            };
            reader_1.onerror = function () {
                onError === null || onError === void 0 ? void 0 : onError();
            };
            reader_1.onload = function () {
                resolve(reader_1.result);
            };
            reader_1.readAsDataURL(file);
        }
        catch (error) {
            reject(undefined);
        }
    });
};
/**
 * Reads a file as Text in a promise way, so you can use await.
 * If other kind of file is sent, this function will read it anyway
 * and will return a string that contains the URL representation
 * @param file File or Blob object
 * @param encoding The type of encoding such as "base64"
 * @returns data text of the file
 */
var readAsText = function (file, encoding, onProgress, onError) {
    return new Promise(function (resolve, reject) {
        try {
            var reader_2 = new FileReader();
            reader_2.onload = function () {
                resolve(reader_2.result);
            };
            reader_2.onprogress = function () {
                onProgress === null || onProgress === void 0 ? void 0 : onProgress();
            };
            reader_2.onerror = function () {
                onError === null || onError === void 0 ? void 0 : onError();
            };
            reader_2.readAsText(file, encoding ? encoding : "base64");
        }
        catch (error) {
            reject(undefined);
        }
    });
};
/**
 * Reads a file and return the raw binary data from the file.
 * @param file File or Blob object
 * @param encoding The type of encoding such as "base64"
 * @returns raw binary data of the file
 */
var readAsBinaryString = function (file, onProgress, onError) {
    return new Promise(function (resolve, reject) {
        try {
            var reader_3 = new FileReader();
            reader_3.onload = function () {
                resolve(reader_3.result);
            };
            reader_3.onprogress = function () {
                onProgress === null || onProgress === void 0 ? void 0 : onProgress();
            };
            reader_3.onerror = function () {
                onError === null || onError === void 0 ? void 0 : onError();
            };
            reader_3.readAsBinaryString(file);
        }
        catch (error) {
            reject(undefined);
        }
    });
};
/**
 * Reads a file and returns an ArrayBuffer representing the file's data
 * @param file File or blob object
 * @param encoding The type of encoding such as "base64"
 * @returns ArrayBuffer representation of the file
 */
var readAsArrayBuffer = function (file, onProgress, onError) {
    return new Promise(function (resolve, reject) {
        try {
            var reader_4 = new FileReader();
            reader_4.onload = function () {
                resolve(reader_4.result);
            };
            reader_4.onprogress = function () {
                onProgress === null || onProgress === void 0 ? void 0 : onProgress();
            };
            reader_4.onerror = function () {
                onError === null || onError === void 0 ? void 0 : onError();
            };
            reader_4.readAsArrayBuffer(file);
        }
        catch (error) {
            reject(undefined);
        }
    });
};

/**
 * Resize an image resolution given maxWidth and maxHeight
 *
 * Should be called with await
 * @param base64Str a string representation of an imae file
 * @param maxWidth the max width of he image
 * @param maxHeight the max height of he image
 * @returns the resized image
 */
function resizeImage(base64Str, maxWidth, maxHeight) {
    if (maxWidth === void 0) { maxWidth = 135; }
    if (maxHeight === void 0) { maxHeight = 120; }
    return new Promise(function (resolve, reject) {
        try {
            var img_1 = new Image();
            img_1.src = base64Str;
            img_1.onload = function () {
                var canvas = document.createElement('canvas');
                var MAX_WIDTH = maxWidth;
                var MAX_HEIGHT = maxHeight;
                var width = img_1.width;
                var height = img_1.height;
                if (maxWidth > width && maxHeight > height) {
                    resolve(base64Str);
                }
                else if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                }
                else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.drawImage(img_1, 0, 0, width, height);
                    resolve(canvas.toDataURL());
                }
                else {
                    if (process.env.NODE_ENV === "development") {
                        console.error("An error ocurred when trying to make a thumnail");
                    }
                    reject(undefined);
                }
            };
        }
        catch (error) {
            if (process.env.NODE_ENV === "development") {
                console.error("An error ocurred when trying to make a thumnail");
            }
            reject(undefined);
        }
    });
}

/**
 * Resize an image resolution given maxWidth and maxHeight
 *
 * Should be called with await
 * @param base64Str a string representation of an imae file
 * @param maxWidth the max width of he image
 * @param maxHeight the max height of he image
 * @returns the resized image
 */
function getImageOrientation(imageSource) {
    return new Promise(function (resolve, reject) {
        //console.log("getImageOrientation imageSource", imageSource);
        if (!imageSource || imageSource.length === 0) {
            // console.log("getImageOrientation rejected", imageSource);
            reject("landscape");
            return;
        }
        try {
            //console.log("getImageOrientation try ini", imageSource);
            var img_1 = new Image();
            img_1.src = imageSource;
            img_1.onerror = function (ev) {
                //console.log("getImageOrientation There was a ne error reading", ev);
                reject("landscape");
            };
            img_1.onload = function () {
                var width = img_1.width;
                var height = img_1.height;
                if (width > height) {
                    resolve("landscape");
                }
                else {
                    resolve("portrait");
                }
            };
        }
        catch (error) {
            //console.error("An error ocurred when trying to get the image orientation");
            if (process.env.NODE_ENV === "development") {
                console.error("An error ocurred when trying to get the image orientation");
            }
            reject("landscape");
        }
    });
}

var sevenzip = "https://user-images.githubusercontent.com/43678736/132086517-72a51a12-e403-4675-bfd7-22c23affa730.png";
var aac = "https://user-images.githubusercontent.com/43678736/132086518-7026d4f1-ea16-4ed0-89fd-37c1aa8ac3ed.png";
var abw = "https://user-images.githubusercontent.com/43678736/132086519-863c63b4-917e-4471-94ff-7e15651cc14b.png";
var accdb = "https://user-images.githubusercontent.com/43678736/132086520-9bc6aa3b-51c9-4da2-9ef7-349162b86d0b.png";
var avi = "https://user-images.githubusercontent.com/43678736/132086521-dbd6cf0d-d4d7-4b92-bb26-17e8a51a9383.png";
var azw = "https://user-images.githubusercontent.com/43678736/132086522-070f48e8-78a8-4294-8dbb-aab81525e164.png";
var bmp = "https://user-images.githubusercontent.com/43678736/132086595-90ab7f90-f87e-4900-94d9-d0b26745df48.png";
var bz = "https://user-images.githubusercontent.com/43678736/132086597-e285ad5c-613a-4679-a270-493e5be4ffd9.png";
var bz2 = "https://user-images.githubusercontent.com/43678736/132086598-623c410a-084a-4395-a448-211b2ff61cfe.png";
var cda = "https://user-images.githubusercontent.com/43678736/132086600-8b70a007-512d-4252-9c66-eabd3ddd6573.png";
var csh = "https://user-images.githubusercontent.com/43678736/132086601-e62e5d1a-d8a2-4475-a14f-85922cec9272.png";
var css = "https://user-images.githubusercontent.com/43678736/132086602-4c772934-f608-4f01-8459-c4622cee8ad5.png";
var csv = "https://user-images.githubusercontent.com/43678736/132086604-b5b019fe-572e-477e-92c2-3769a48a1304.png";
var docx = "https://user-images.githubusercontent.com/43678736/132086606-715ccb66-4702-4f7d-9b09-ac93ba17b643.png";
var drawio = "https://user-images.githubusercontent.com/43678736/132086608-bcae9d57-8e54-488c-90c4-4952ae530b5e.png";
var eot = "https://user-images.githubusercontent.com/43678736/132086618-397d6bd2-9fda-43ed-a135-cb40388c35af.png";
var epub = "https://user-images.githubusercontent.com/43678736/132086620-2586ba40-c583-4589-b1a4-8bb5b258b44d.png";
var freearc = "https://user-images.githubusercontent.com/43678736/132086621-3b95fb64-2533-4ccc-abcd-bd2beba572e9.png";
var gif = "https://user-images.githubusercontent.com/43678736/132086622-af705a0c-2b25-4ba7-8ab6-bd69ec97f7e2.png";
var gzip = "https://user-images.githubusercontent.com/43678736/132086624-89141a46-64e4-4fa0-bf69-54a0eb4d48c9.png";
var html = "https://user-images.githubusercontent.com/43678736/132086625-1b8f2652-1de0-4475-8c12-7da4a9973ffb.png";
var icalendar = "https://user-images.githubusercontent.com/43678736/132086626-38699705-1e6f-4bca-984b-03167b236faa.png";
var java = "https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png";
var jar = "https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png";
var javascript = "https://user-images.githubusercontent.com/43678736/132086652-4562942e-aaea-466c-968f-380fffabf3f9.png";
var jpeg = "https://user-images.githubusercontent.com/43678736/132086653-0487e7e2-1ee3-49e2-8cfe-3e20f1f7490a.png";
var json = "https://user-images.githubusercontent.com/43678736/132086656-6e96c815-e4e2-4ffd-9d71-57e9cc2450bc.png";
var jsonld = "https://user-images.githubusercontent.com/43678736/132086658-5d27d3c2-394f-43fb-b512-9b414a257875.png";
var midi = "https://user-images.githubusercontent.com/43678736/132086659-98f3ef6e-b9f3-4b6d-b18f-469b5334ba27.png";
var mp3 = "https://user-images.githubusercontent.com/43678736/132086661-a5484553-06c7-4ffa-a8f9-96b57b1b0344.png";
var mp4 = "https://user-images.githubusercontent.com/43678736/132086662-05ad1597-d5e5-4efa-833e-2876e966a745.png";
var mpeg = "https://user-images.githubusercontent.com/43678736/132086663-90c58955-f7fb-4bdb-ac53-92667d16d4a3.png";
var mpkg = "https://user-images.githubusercontent.com/43678736/132086664-9a7530e7-6d78-4ef3-a176-20cf7f57b555.png";
var octet = "https://user-images.githubusercontent.com/43678736/132086666-ab3c505d-b2c0-4177-9a06-aed5d9c39ee4.png";
var odp = "https://user-images.githubusercontent.com/43678736/132086667-6c7dcbcc-8d83-41a2-8e0a-85b09e2791ae.png";
var ods = "https://user-images.githubusercontent.com/43678736/132086668-9f246e91-cf2e-49cf-9617-e1fbb71abbbb.png";
var odt = "https://user-images.githubusercontent.com/43678736/132086669-46113762-84d1-4b32-9441-b0138ce17a5d.png";
var oga = "https://user-images.githubusercontent.com/43678736/145835364-2054509d-3448-4d34-921f-73dd6e297fc7.png";
var ogv = "https://user-images.githubusercontent.com/43678736/145835367-19172bf8-cd5a-4cbe-b512-d0de1d91f269.png";
var ogx = "https://user-images.githubusercontent.com/43678736/145835373-a57ef0f5-3968-483b-9f55-6d67e7f1dcea.png";
var opus = "https://user-images.githubusercontent.com/43678736/132086670-0f96e770-cedc-4635-a5f9-cf97894c1d7a.png";
var otf = "https://user-images.githubusercontent.com/43678736/132086671-02ad35ef-ec3a-4a65-abd5-5bf794dfcf7b.png";
var pdf = "https://user-images.githubusercontent.com/43678736/132086672-3a856fda-823d-4997-b802-c7c640e6ef44.png";
var php = "https://user-images.githubusercontent.com/43678736/132086673-0c4409ab-754e-4619-8cfa-179d0ccf1bd9.png";
var png = "https://user-images.githubusercontent.com/43678736/132086674-fdb56d02-5845-49b7-8462-6357bc963464.png";
var pptx = "https://user-images.githubusercontent.com/43678736/132086675-c879645d-acb4-41a6-ab3c-4e6c2048badb.png";
var psd = "https://user-images.githubusercontent.com/43678736/132086685-4e327c4c-a409-4b83-b36a-8d88936b314b.png";
var python = "https://user-images.githubusercontent.com/43678736/132086688-8e82fae4-3a9b-49c0-bf99-77189525514c.png";
var tar = "https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png";
var rar = "https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png";
var react = "https://user-images.githubusercontent.com/43678736/132086691-d472576b-ec6a-4332-acd2-dd6a00b72952.png";
var rtf = "https://user-images.githubusercontent.com/43678736/132086693-9d43571e-0c86-438f-b247-e2cb42e19e06.png";
var sass = "https://user-images.githubusercontent.com/43678736/132086694-4e661d6a-1118-441e-8bc3-c52fcb2133b6.png";
var sh = "https://user-images.githubusercontent.com/43678736/132086697-1d82d724-35b6-4f06-847a-3c59a5deda6e.png";
var swf = "https://user-images.githubusercontent.com/43678736/132086698-19384230-dbd7-4e05-bc69-ef4537b6aae3.png";
var text = "https://user-images.githubusercontent.com/43678736/132086699-5993a482-04f4-4915-b105-9037f527cf61.png";
var tiff = "https://user-images.githubusercontent.com/43678736/132086700-c23461c8-6819-46e1-aecd-0a1f8d3507bb.png";
var ttf = "https://user-images.githubusercontent.com/43678736/132086701-c8044c09-8d95-4af1-9410-66761001d7da.png";
var typescript = "https://user-images.githubusercontent.com/43678736/132086702-59294337-ed99-4302-badd-316b2c1ff62f.png";
var vsd = "https://user-images.githubusercontent.com/43678736/132086704-8fd51e7c-afa2-47a3-ab2f-d0bcd0ecae9f.png";
var vue = "https://user-images.githubusercontent.com/43678736/132086705-33294da1-5c0f-49f7-b890-e4857cec0a6d.png";
var wav = "https://user-images.githubusercontent.com/43678736/132086706-22f805d0-39d4-494b-824e-47dc75d05eb7.png";
var webm = "https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png";
var weba = "https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png";
var webp = "https://user-images.githubusercontent.com/43678736/132086708-21d096dd-7148-40aa-97f1-cbb099339740.png";
var wma = "https://user-images.githubusercontent.com/43678736/132086709-811d4e90-3cfa-4044-a956-aeda9c67fc92.png";
var wmv = "https://user-images.githubusercontent.com/43678736/132086710-c5479c6c-0249-4542-adad-48b0ef40b775.png";
var woff = "https://user-images.githubusercontent.com/43678736/132086711-1524a3e7-3e33-4822-a34f-ff3235404045.png";
var xlsx = "https://user-images.githubusercontent.com/43678736/132086712-17e2c491-f6e4-4586-aef6-06bcc5f4b0e5.png";
var xml = "https://user-images.githubusercontent.com/43678736/132086715-204b5a8b-9c5a-4bac-8294-9237ebc16089.png";
var xul = "https://user-images.githubusercontent.com/43678736/132086716-64511d20-58cb-45a8-85df-f4d9408b469d.png";
var zip = "https://user-images.githubusercontent.com/43678736/132086718-a8499333-6282-4820-aa1f-4d133eb54648.png";

/**
 * Looks for the first file extension
 * @param fileName file name
 * @returns the file name extension
 */
var getExt = function (fileName) {
    var re = /(?:\.([^.]+))?$/;
    var result = re.exec(fileName);
    if (result) {
        return result[1];
    }
    else {
        return "";
    }
};

var DEF_GEN_MIME = "octet";
/**
 *
 * @param tailMime
 * @returns
 */
var audioSelector = function (tailMime) {
    switch (tailMime) {
        case "aac": return "aac";
        case "midi": return "midi";
        case "x-midi": return "midi";
        case "mpeg": return "mpeg"; //mp3
        case "ogg": return "oga";
        case "opus": return "opus";
        case "wav": return "wav";
        case "webm": return "webm";
        //case "3gpp": return "threegp";
        //case "3gpp2": return "threegp";
        //case "mp3": return "mp3";
        case "wma": return "wma";
        default: return DEF_GEN_MIME;
    }
};
var textSelector = function (tailMime) {
    switch (tailMime) {
        case "css": return "css";
        case "csv": return "csv";
        case "html": return "html";
        case "calendar": return "icalendar";
        case "javascript": return "javascript";
        case "x-javascript": return "javascript";
        case "plain": return "text";
        case "xml": return "xml";
        default: return DEF_GEN_MIME;
    }
};
var imageSelector = function (tailMime) {
    switch (tailMime) {
        case "bmp": return "bmp";
        case "gif": return "gif";
        // case "vnd.microsoft.icon": return "ico";
        //case "ico": return "ico";
        case "jpg": return "jpeg";
        case "jpeg": return "jpeg";
        case "png": return "png";
        //case "svg+xml": return "svg";
        //case "svg": return "svg";
        case "tiff": return "tiff";
        case "webp": return "webp";
        default: return DEF_GEN_MIME;
    }
};
var fontSelector = function (tailMime) {
    switch (tailMime) {
        case "otf": return "otf";
        case "ttf": return "ttf";
        case "woff": return "woff";
        case "woff2": return "woff";
        default: return DEF_GEN_MIME;
    }
};
var videoSelector = function (tailMime) {
    switch (tailMime) {
        case "x-msvideo": return "avi";
        case "msvideo": return "avi";
        case "avi": return "avi";
        case "mp4": return "mp4";
        case "mpeg": return "mpeg";
        case "ogg": return "ogv";
        case "mp2t": return "mp2t";
        case "wmv": return "wmv";
        case "webm": return "webm";
        // case "3gpp": return "threegp";
        // case "3gpp2": return "threegp2";
        default: return DEF_GEN_MIME;
    }
};
/**
 *
 * @param tailMime
 * @returns
 */
var applicationSelector = function (tailMime) {
    switch (tailMime) {
        case "x-abiword": return "abw";
        case "abiword": return "abw";
        case "x-freearc": return "arc";
        case "freearc": return "arc";
        case "vnd.amazon.ebook": return "azw";
        case "octet-stream": return "octet";
        case "x-bzip": return "bz";
        case "x-bzip2": return "bz2";
        case "bzip": return "bz";
        case "bzip2": return "bz2";
        case "x-cdf": return "cda";
        case "msaccess": return "accdb";
        case "csh": return "csh";
        case "x-csh": return "csh";
        case "vnd.ms-fontobject": return "eot";
        case "epub+zip": return "epub";
        case "gzip": return "gzip";
        case "java-archive": return "jar";
        case "x-javascript": return "javascript";
        case "json": return "json";
        case "ld+json": return "jsonld";
        case "vnd.apple.installer+xml": return "mpkg";
        case "ogg": return "ogx";
        case "vnd.rar": return "rar";
        case "rtf": return "rtf";
        case "x-sh": return "sh";
        case "sh": return "sh";
        case "x-shockwave-flash": return "swf";
        case "x-tar": return "tar";
        case "x-httpd-php": return "php";
        case "vnd.visio": return "vsd";
        case "xhtml+xml": return "xhtml";
        case "xml": return "xml";
        case "vnd.mozilla.xul+xml": return "xul";
        case "vnd.openxmlformats-officedocument.wordprocessingml.document": return "docx";
        case "msword": return "docx";
        case "vnd.openxmlformats-officedocument.spreadsheetml.sheet": return "xlsx";
        case "vnd.openxmlformats-officedocument.presentationml.presentation": return "pptx";
        case "vnd.ms-powerpoint": return "pptx";
        case "vnd.oasis.opendocument.presentation": return "odp";
        case "vnd.oasis.opendocument.text": return "odt";
        case "vnd.oasis.opendocument.spreadsheet": return "ods";
        case "zip": return "zip";
        case "x-zip-compressed": return "zip";
        case "pdf": return "pdf";
        default: return DEF_GEN_MIME;
    }
};
/**
 * Selects to wich mime type the mime type given belongs to
 * @param mimeType mime type to be searched
 * @returns the generic type,
if not found it return "octet" that means generic binary file
 */
var mimeSelector = function (mimeType) {
    // let genericMime: string | undefined = undefined;
    if (!mimeType || !mimeType.includes("/")) {
        return DEF_GEN_MIME;
    }
    var headerMime = mimeType.split("/")[0];
    var tailMime = mimeType.split("/")[1];
    /**
     * Every mimetype that
     * starts with: "application/...."
     */
    switch (headerMime) {
        case "application": return applicationSelector(tailMime);
        case "audio": return audioSelector(tailMime);
        case "video": return videoSelector(tailMime);
        case "text": return textSelector(tailMime);
        case "image": return imageSelector(tailMime);
        case "font": return fontSelector(tailMime);
        default: return DEF_GEN_MIME;
    }
};
/**
 * Selects to wich mapped extension
 * the given exension belongs to
 *
 * @param extension
 * @returns
 */
var extensionSelector = function (extension) {
    var genericMime = "octet";
    if (extension && extension !== "") {
        if (extension.includes("zip") || extension.includes("rar")) {
            genericMime = "zip";
        }
        else if (extension.includes("doc")) {
            genericMime = "docx";
        }
        else if (extension.includes("xls")) {
            genericMime = "xlsx";
        }
        else if (extension.includes("drawio")) {
            genericMime = "drawio";
        }
        else if (extension.includes("psd")) {
            genericMime = "psd";
        }
        else if (extension.includes("csv")) {
            genericMime = "csv";
        }
        else if (extension === "jsx") {
            genericMime = "react";
        }
        else if (extension === "py") {
            genericMime = "python";
        }
        else if (extension === "vue") {
            genericMime = "vue";
        }
        else if (extension === "java") {
            genericMime = "java";
        }
        else if (extension === "ts") {
            genericMime = "typescript";
        }
        else if (extension === "sass" || extension === "scss") {
            genericMime = "sass";
        }
    }
    return genericMime;
};
/**
 * Chack for extention whether the file is code os not
 * @param extension
 * @returns
 */
var checkIsCode = function (extension) {
    var genericMime = "text";
    if (extension && extension !== "") {
        if (extension === "jsx") {
            genericMime = "react";
        }
        else if (extension === "py") {
            genericMime = "python";
        }
        else if (extension === "vue") {
            genericMime = "vue";
        }
        else if (extension === "java") {
            genericMime = "java";
        }
        else if (extension === "ts" || extension === "tsx") {
            genericMime = "typescript";
        }
        else if (extension === "js") {
            genericMime = "javascript";
        }
        else if (extension === "xml") {
            genericMime = "xml";
        }
        else if (extension === "php") {
            genericMime = "php";
        }
    }
    return genericMime;
};
/**
 * Looks for a suitable file icon
 * If not found, returns octet-stream url
 * @param props mime and extension from file to search
 * @returns the result file ico
 */
var getURLFileIco = function (file, customIcons) {
    var result = "fallBack";
    //if not file, return octet
    if (!file) {
        result = DEF_GEN_MIME;
        if (customIcons === null || customIcons === void 0 ? void 0 : customIcons.fallBack)
            return { url: customIcons === null || customIcons === void 0 ? void 0 : customIcons.fallBack, mimeResume: result };
        return { url: mimeUrlList[result], mimeResume: result };
    }
    else {
        result = mimeSelector(file.type);
    }
    //If plain text
    var extention = getExt(file.name);
    if (result === "text") {
        result = checkIsCode(extention);
    }
    //If octet stream result, second chance: file extention
    if (result === DEF_GEN_MIME) {
        result = extensionSelector(extention);
    }
    var customUrl = customIcons === null || customIcons === void 0 ? void 0 : customIcons[result];
    if (customUrl !== undefined)
        return { url: customUrl, mimeResume: result };
    return { url: mimeUrlList[result], mimeResume: result };
};
/**
 * Looks for a suitable file icon
 * @param props mime and extension from file to search
 * @returns the result file ico, if not found, turns octet-stream url
 */
var getURLFileIcoFromNameAndType = function (name, type, customIcons) {
    var result = "octet";
    //if not nam and type, return octet
    if (!name) {
        result = DEF_GEN_MIME;
        if (customIcons === null || customIcons === void 0 ? void 0 : customIcons.fallBack)
            return { url: customIcons === null || customIcons === void 0 ? void 0 : customIcons.fallBack, mimeResume: result };
        return { url: mimeUrlList[result], mimeResume: result };
    }
    else {
        result = mimeSelector(type);
    }
    //If plain text
    var extention = getExt(name);
    if (result === "text") {
        result = checkIsCode(extention);
    }
    //If octet stream result, second chance: file extention
    if (result === DEF_GEN_MIME) {
        result = extensionSelector(extention);
    }
    var customUrl = customIcons === null || customIcons === void 0 ? void 0 : customIcons[result];
    if (customUrl !== undefined)
        return { url: customUrl, mimeResume: result };
    return { url: mimeUrlList[result], mimeResume: result };
};
var mimeUrlList = {
    aac: aac,
    accdb: accdb,
    abw: abw,
    arc: freearc,
    avi: avi,
    azw: azw,
    octet: octet,
    bmp: bmp,
    bz: bz,
    bz2: bz2,
    cda: cda,
    csh: csh,
    css: css,
    csv: csv,
    docx: docx,
    drawio: drawio,
    eot: eot,
    epub: epub,
    gzip: gzip,
    gif: gif,
    html: html,
    //ico: ico,
    icalendar: icalendar,
    jar: jar,
    jpeg: jpeg,
    javascript: javascript,
    json: json,
    jsonld: jsonld,
    midi: midi,
    //  js: js,
    mp3: mp3,
    mp4: mp4,
    mpeg: mpeg,
    mpkg: mpkg,
    mp2t: octet,
    odp: odp,
    ods: ods,
    odt: odt,
    oga: oga,
    ogv: ogv,
    ogx: ogx,
    opus: opus,
    otf: otf,
    png: png,
    pdf: pdf,
    php: php,
    pptx: pptx,
    psd: psd,
    rar: rar,
    rtf: rtf,
    sass: sass,
    sh: sh,
    //svg: svg,
    swf: swf,
    tar: tar,
    tiff: tiff,
    ttf: ttf,
    //ts: ts,
    typescript: typescript,
    text: text,
    vsd: vsd,
    wav: wav,
    weba: weba,
    webm: webm,
    webp: webp,
    woff: woff,
    wma: wma,
    wmv: wmv,
    xhtml: html,
    xlsx: xlsx,
    xml: xml,
    xul: xul,
    zip: zip,
    // threegp: threegp,
    sevenzip: sevenzip,
    python: python,
    java: java,
    react: react,
    vue: vue,
    fallBack: octet,
};

/**
 * A class definition for ExtFile.
 * This class has the purpose to allow the creation of instances
 * of an ExtFile for performing complex operations that cannot be
 * accomplished just by using the ExtFile type.
 * For instance, it can help in changing the value of some attributes
 * across different scopes thanks to memory reference.
 */
var ExtFileInstance = /** @class */ (function () {
    function ExtFileInstance(extFile) {
        var id = extFile.id, file = extFile.file, name = extFile.name, size = extFile.size, type = extFile.type, imageUrl = extFile.imageUrl, valid = extFile.valid, errors = extFile.errors, uploadMessage = extFile.uploadMessage, uploadStatus = extFile.uploadStatus, progress = extFile.progress, xhr = extFile.xhr, extraData = extFile.extraData, extraUploadData = extFile.extraUploadData, serverResponse = extFile.serverResponse, downloadUrl = extFile.downloadUrl, videoUrl = extFile.videoUrl, uploadUrl = extFile.uploadUrl;
        this.id = id;
        this.file = file;
        this.name = name;
        this.size = size;
        this.type = type;
        this.imageUrl = imageUrl;
        this.valid = valid;
        this.errors = errors;
        this.uploadStatus = uploadStatus;
        this.uploadMessage = uploadMessage;
        this.progress = progress;
        this.xhr = xhr;
        this.extraData = extraData;
        this.extraUploadData = extraUploadData;
        this.serverResponse = serverResponse;
        this.downloadUrl = downloadUrl;
        this.videoUrl = videoUrl;
        this.uploadUrl = uploadUrl;
    }
    /**
     * method under construction
     */
    /*  private static kamuiFile() {
 
     }
    /**
     * Copies all non undefined attributes from ExtFileInstance to a new ExtFile object
     * @param extFileInstance the instance of ExtFile
     * @returns an ExtFile object
     */
    ExtFileInstance.toExtFile = function (extFileInstance) {
        //console.log("before toExtFile()", extFileInstance);
        var extFileClone = {}; // the new empty object
        var extFileInstanceKeys = Object.keys(extFileInstance);
        var extFileInstanceValues = Object.values(extFileInstance);
        // let's copy all user properties into it
        for (var i = 0; i < extFileInstanceValues.length; i++) {
            var currentValue = extFileInstanceValues[i];
            var currKey = extFileInstanceKeys[i];
            if (currentValue !== undefined) {
                extFileClone[currKey] = currentValue;
            }
        }
        //console.log("after toExtFile()", extFileClone);
        //console.log("current extFileClone keys",Object.keys( extFileClone).length);
        return extFileClone;
    };
    /**
     * Copies all non undefined attributes from ExtFileInstance to a new ExtFile object.
     * @returns an ExtFile object
     */
    ExtFileInstance.prototype.toExtFile = function () {
        return ExtFileInstance.toExtFile(this);
    };
    /*   static mock = (id?: number): ExtFileInstance => {
          return new ExtFileInstance(
              extFileMock(id)
          );
      } */
    ExtFileInstance.hasValidUrl = function (extFile) {
        return extFile.uploadUrl && extFile.uploadUrl.length > 0;
    };
    ExtFileInstance.someValidUrl = function (extFile) {
        return extFile.some(ExtFileInstance.hasValidUrl);
    };
    return ExtFileInstance;
}());

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var ExtFileManager = /** @class */ (function () {
    function ExtFileManager() {
    }
    /**
     * Increases the id counter and returns the next id available.
     * @returns the next integer id available
     */
    ExtFileManager.getNextId = function () {
        ExtFileManager.nextId++;
        return ExtFileManager.nextId;
    };
    /**
     * Updates a dui file list given an id
     * @param id id of the fileList
     * @param extFiles list of DuiFiles forinitializing the array
     * @returns the id of the fileList
     */
    ExtFileManager.setFileList = function (id, extFilesInstances) {
        if (!id) {
            return 0;
        }
        else {
            ExtFileManager.fileLists[id] = __spreadArray([], extFilesInstances, true);
            return id;
        }
    };
    /**
     * Generates a new ID
     * @returns the next Id asociated with a DuiFIle list
     */
    ExtFileManager.createFileListMap = function () {
        var nextId = ExtFileManager.getNextId();
        ExtFileManager.fileLists[nextId] = [];
        return nextId;
    };
    /**
     * Deletes a list map
     * @returns the next Id asociated with a DuiFIle list
     */
    ExtFileManager.removeFileListMap = function (id) {
        if (!id) {
            return 0;
        }
        else {
            try {
                ExtFileManager.fileLists[id] = undefined;
                return id;
            }
            catch (error) {
                if (process.env.NODE_ENV === "development")
                    console.error("Error on remove", error);
                return 0;
            }
        }
    };
    /**
     *
     * @param id the id of the dropzone
     * @returns
     */
    ExtFileManager.getExtFileInstanceList = function (id) {
        try {
            if (!id) {
                return undefined;
            }
            return ExtFileManager.fileLists[id];
        }
        catch (error) {
            if (process.env.NODE_ENV === "development")
                console.error("Error on getExtFileInstanceList", error);
            return undefined;
        }
    };
    /**
     * Updates(replaces) the extFile list on preparing stage and returns the new array.
     * Removes the non valid files if cleanOnUpload is true and validateFiles is also true
     * Then sets on preparing stage all files according to the following creiteria:
     * If theuploadStatus is diferent than "sucess" AND
     * then, update the files on preparing stage. Otherwise keep the extFile props.
     * Finally, updates the ExtFileInstance list on ExtFileManager.
     * @param dropzoneId the id to access the right list
     * @param localFiles the list of extFiles
     * @param validateFiles flag that indicates that validation is active or o¿not
     * @param cleanOnUpload flag to determine whther to clena the list oof non valid files or not
     * @returns a list of ExtFileInstance
     */
    ExtFileManager.setFileListMapPreparing = function (dropzoneId, localFiles, validateFiles, cleanOnUpload) {
        //console.log("setFileListMapPreparing before if", dropzoneId, localFiles, cleanOnUpload);
        if (!(typeof dropzoneId === "number" || typeof dropzoneId === "string"))
            return undefined;
        //console.log("setFileListMapPreparing before try", localFiles, cleanOnUpload);
        try {
            var resultExtList = [];
            //initializes the extFileLInstance list
            var temLocalFiles = __spreadArray([], localFiles, true);
            //remove non valids if cleanOnUpload is true and validateFiles is also true
            if (cleanOnUpload && validateFiles) {
                // clean on Upload is true, so non valid files must be removed
                temLocalFiles = temLocalFiles.filter(function (extFile) { return extFile.valid; });
                //console.log("temLocalFiles filter", temLocalFiles);
            }
            //console.log("setFileListMapPreparing after remove non valids", temLocalFiles);
            if (validateFiles) {
                // validation flag was set to true, so only valid=true files will be set to "preparing"
                //so, only valid files was kept in the temLocalfiles array
                //now set the preparing state only for files with uploadStatus !== "success"
                temLocalFiles =
                    temLocalFiles
                        .map(function (extFile) {
                        if (extFile.uploadStatus !== "success" && extFile.valid) {
                            return __assign(__assign({}, extFile), { uploadStatus: "preparing" });
                        }
                        else {
                            return __assign({}, extFile);
                        }
                    });
            }
            else {
                // all files will be set to "preparing" whether the valid value
                // except those files with uploadStatus ==="success"
                temLocalFiles =
                    temLocalFiles
                        .map(function (extFile) {
                        if (extFile.uploadStatus !== "success") {
                            return __assign(__assign({}, extFile), { uploadStatus: "preparing" });
                        }
                        else {
                            return __assign({}, extFile);
                        }
                    });
            }
            //console.log("setFileListMapPreparing result", temLocalFiles);
            //converto to Object instances
            resultExtList = temLocalFiles.map(function (F) { return new ExtFileInstance(F); });
            //console.log("setFileListMapPreparing RESULT resultExtList", resultExtList);
            var resultSet = ExtFileManager.setFileList(dropzoneId, resultExtList);
            //console.log("setFileListMapPreparing RESULT resultSet", resultSet);
            return resultExtList;
            // return ExtFileManager.fileLists[dropzoneId];
        }
        catch (error) {
            if (process.env.NODE_ENV === "development")
                console.error("setFileListMapPreparing Error on get List", error);
            return undefined;
        }
    };
    /**
 * Updates(replaces) the extFile list on preparing stage and returns the new array.
 * Removes the non valid files if cleanOnUpload is true and validateFiles is also true
 * Then sets on preparing stage all files according to the following creiteria:
 * If theuploadStatus is diferent than "sucess" AND
 * then, update the files on preparing stage. Otherwise keep the extFile props.
 * Finally, updates the ExtFileInstance list on ExtFileManager.
 * @param dropzoneId the id to access the right list
 * @param localFiles the list of extFiles
 * @param validateFiles flag that indicates that validation is active or o¿not
 * @param cleanOnUpload flag to determine whther to clena the list oof non valid files or not
 * @returns a list of ExtFileInstance
 */
    ExtFileManager.setFileListMapPreparing2 = function (dropzoneId, localFiles, validateFiles, cleanOnUpload) {
        ExtFileManager.setFileList(dropzoneId, localFiles.map(function (F) { return new ExtFileInstance(__assign(__assign({}, F), { uploadStatus: "preparing" })); }));
        return ExtFileManager.getExtFileInstanceList(dropzoneId);
    };
    ExtFileManager.nextId = 0;
    ExtFileManager.fileLists = {};
    return ExtFileManager;
}());

var createUploadConfig = function (url, method, headers, uploadLabel, cleanonUpload) {
    return {
        url: url,
        method: method,
        headers: headers,
        uploadLabel: uploadLabel,
        cleanonUpload: cleanonUpload
    };
};

/**
 * A syntetic file creator.
 * Very useful for tests
 */
var SyntheticFile = /** @class */ (function () {
    function SyntheticFile() {
    }
    /**
 *
 * @param name the file name
 * @param size the file size
 * @param type the file type
 * @returns
 */
    SyntheticFile.createFile = function (name, size, type) {
        var file = new File([], name, { type: type });
        Object.defineProperty(file, "size", {
            get: function () {
                return size;
            },
        });
        return file;
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_aac = function (size) {
        return SyntheticFile.createFile("acc_audio-file-with-large-name.aac", size ? size : 3516516, "audio/aac");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_abw = function (size) {
        return SyntheticFile.createFile("abiword-file-with-large-name.abw", size ? size : 3516516, "application/x-abiword");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_freearc = function (size) {
        return SyntheticFile.createFile("freearc-file-with-large-name.arc", size ? size : 3516516, "application/x-freearc");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_avi = function (size) {
        return SyntheticFile.createFile("avi-file-with-large-name.avi", size ? size : 3516516, "video/x-msvideo");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_azw = function (size) {
        return SyntheticFile.createFile("amazon_kindle_ebook-file-with-large-name.azw", size ? size : 3516516, "application/vnd.amazon.ebook");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_octet = function (size) {
        return SyntheticFile.createFile("binary_octet_stream-file-with-large-name.bin", size ? size : 3516516, "application/octet-stream");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_bmp = function (size) {
        return SyntheticFile.createFile("bit_map-file-with-large-name.bmp", size ? size : 3516516, "image/bmp");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_bz = function (size) {
        return SyntheticFile.createFile("x_bzip-file-with-large-name.bz", size ? size : 3516516, "application/x-bzip");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_bz2 = function (size) {
        return SyntheticFile.createFile("x_bzip_2-file-with-large-name.bz2", size ? size : 3516516, "application/x-bzip2");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_cda = function (size) {
        return SyntheticFile.createFile("cd_audio-file-with-large-name.cda", size ? size : 3516516, "application/x-cdf");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_csh = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.csh", size ? size : 3516516, "application/x-csh");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_css = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.css", size ? size : 3516516, "text/css");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_csv = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.csv", size ? size : 3516516, "text/csv");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_doc = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.doc", size ? size : 3516516, "application/msword");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_docx = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.docx", size ? size : 3516516, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_eot = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.eot", size ? size : 3516516, "application/vnd.ms-fontobject");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_epub = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.epub", size ? size : 3516516, "application/epub+zip");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_gzip = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.gz", size ? size : 3516516, "application/gzip");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_gif = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.gif", size ? size : 3516516, "image/gif");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_htm = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.htm", size ? size : 3516516, "text/html");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_html = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.html", size ? size : 3516516, "text/html");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_ico = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.ico", size ? size : 3516516, "image/vnd.microsoft.icon");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_icalendar = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.ics", size ? size : 3516516, "text/calendar");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_jar = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.jar", size ? size : 3516516, "application/java-archive");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_jpeg = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.jpeg", size ? size : 3516516, "image/jpeg");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_jpg = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.jpg", size ? size : 3516516, "image/jpeg");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_js = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.js", size ? size : 3516516, "text/javascript");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_json = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.json", size ? size : 3516516, "application/json");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_jsonld = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.jsonld", size ? size : 3516516, "application/ld+json");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_mid = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.mid", size ? size : 3516516, "audio/midi");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_x_mid = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.mid", size ? size : 3516516, "audio/x-midi");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_midi = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.midi", size ? size : 3516516, "audio/x-midi");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_x_midi = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.midi", size ? size : 3516516, "audio/x-midi");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_mjs = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.mjs", size ? size : 3516516, "text/javascript");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_mp3 = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.mp3", size ? size : 3516516, "audio/mpeg");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_mp4 = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.mp4", size ? size : 3516516, "video/mp4");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_mpeg = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.mpeg", size ? size : 3516516, "video/mpeg");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_mpkg = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.mpkg", size ? size : 3516516, "application/vnd.apple.installer+xml");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_odp = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.odp", size ? size : 3516516, "application/vnd.oasis.opendocument.presentation");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_ods = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.ods", size ? size : 3516516, "application/vnd.oasis.opendocument.spreadsheet");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_odt = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.odt", size ? size : 3516516, "application/vnd.oasis.opendocument.text");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_oga = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.oga", size ? size : 3516516, "audio/ogg");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_ogv = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.ogv", size ? size : 3516516, "video/ogg");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_ogx = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.ogx", size ? size : 3516516, "application/ogg");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_opus = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.opus", size ? size : 3516516, "audio/opus");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_otf = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.otf", size ? size : 3516516, "font/otf");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_png = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.png", size ? size : 3516516, "image/png");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_pdf = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.pdf", size ? size : 3516516, "application/pdf");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_php = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.php", size ? size : 3516516, "application/x-httpd-php");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_ppt = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.ppt", size ? size : 3516516, "application/vnd.ms-powerpoint");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_pptx = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.pptx", size ? size : 3516516, "application/vnd.openxmlformats-officedocument.presentationml.presentation");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_rar = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.rar", size ? size : 3516516, "application/vnd.rar");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_rtf = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.rtf", size ? size : 3516516, "application/rtf");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_sh = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.sh", size ? size : 3516516, "application/x-sh");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_svg = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.svg", size ? size : 3516516, "image/svg+xml");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_swf = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.swf", size ? size : 3516516, "application/x-shockwave-flash");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_tar = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.tar", size ? size : 3516516, "application/x-tar");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_tif = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.tif", size ? size : 3516516, "image/tiff");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_tiff = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.tiff", size ? size : 3516516, "image/tiff");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_ts = function (size) {
        return SyntheticFile.createFile("mp2t_video-file-with-large-name.ts", size ? size : 3516516, "video/mp2t");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_ttf = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.ttf", size ? size : 3516516, "font/ttf");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_text = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.txt", size ? size : 3516516, "text/plain");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_typescript = function (size) {
        return SyntheticFile.createFile("typescript-file-with-large-name.ts", size ? size : 3516516, "text/plain");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_vsd = function (size) {
        return SyntheticFile.createFile("ms_visio-file-with-large-name.vsd", size ? size : 3516516, "application/vnd.visio");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_wav = function (size) {
        return SyntheticFile.createFile("wav_audio-file-with-large-name.wav", size ? size : 3516516, "audio/wav");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_weba = function (size) {
        return SyntheticFile.createFile("web_audio-file-with-large-name.weba", size ? size : 3516516, "audio/webm");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_webm = function (size) {
        return SyntheticFile.createFile("web_video-file-with-large-name.webm", size ? size : 3516516, "video/webm");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_webp = function (size) {
        return SyntheticFile.createFile("web_image-file-with-large-name.webp", size ? size : 3516516, "image/webp");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_woff = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.woff", size ? size : 3516516, "font/woff");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_woff2 = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.woff2", size ? size : 3516516, "font/woff2");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_xhtml = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.xhtml", size ? size : 3516516, "application/xhtml+xml");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_xlsx = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.xls", size ? size : 3516516, "application/vnd.ms-excel");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_xls = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.xlsx", size ? size : 3516516, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_xml = function (size) {
        return SyntheticFile.createFile("xml-file-with-large-name.xml", size ? size : 3516516, "application/xml");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_xml_txt = function (size) {
        return SyntheticFile.createFile("xml_plain_text-file-with-large-name.xml", size ? size : 3516516, "application/xml");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_xul = function (size) {
        return SyntheticFile.createFile("test-file-with-large-name.xul", size ? size : 3516516, "application/vnd.mozilla.xul+xml");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_zip = function (size) {
        return SyntheticFile.createFile("zip-file-with-large-name.zip", size ? size : 3516516, "application/zip");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_3gp = function (size) {
        return SyntheticFile.createFile("3gp_video-file-with-large-name.3gp", size ? size : 3516516, "video/3gpp");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_3gp2 = function (size) {
        return SyntheticFile.createFile("3gp2_video-file-with-large-name.3g2", size ? size : 3516516, "video/3gpp2");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_3gp_a = function (size) {
        return SyntheticFile.createFile("3gp_audio-file-with-large-name.3gp", size ? size : 3516516, "audio/3gpp");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_3gp_v = function (size) {
        return SyntheticFile.createFile("3gp_audio-file-with-large-name.3gp2", size ? size : 3516516, "audio/3gpp2");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_7z = function (size) {
        return SyntheticFile.createFile("seven_zip-file-with-large-name.7z", size ? size : 3516516, "application/x-7z-compressed");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_python = function (size) {
        return SyntheticFile.createFile("python-file-with-large-name.py", size ? size : 3516516, "text/plain");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_java = function (size) {
        return SyntheticFile.createFile("java-file-with-large-name.java", size ? size : 3516516, "text/plain");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_react = function (size) {
        return SyntheticFile.createFile("react_jsx-file-with-large-name.jsx", size ? size : 3516516, "text/plain");
    };
    /**
    *
    * @param size the file size
    * @returns a syntetic File object instance
    */
    SyntheticFile.create_vue = function (size) {
        return SyntheticFile.createFile("vue-file-with-large-name.vue", size ? size : 3516516, "text/plain");
    };
    /**
     * Creates an array of fake (synthetic) files
     * @param size the file size for all synthetic files
     * @returns an array of all file icon preview supported files
     */
    SyntheticFile.createFileListMiscelanious = function (size) {
        var listFile = [];
        listFile.push(SyntheticFile.create_aac(size));
        listFile.push(SyntheticFile.create_abw(size));
        listFile.push(SyntheticFile.create_freearc(size));
        listFile.push(SyntheticFile.create_avi(size));
        listFile.push(SyntheticFile.create_azw(size));
        listFile.push(SyntheticFile.create_octet(size));
        listFile.push(SyntheticFile.create_bmp(size));
        listFile.push(SyntheticFile.create_bz(size));
        listFile.push(SyntheticFile.create_bz2(size));
        listFile.push(SyntheticFile.create_cda(size));
        listFile.push(SyntheticFile.create_csh(size));
        listFile.push(SyntheticFile.create_css(size));
        listFile.push(SyntheticFile.create_csv(size));
        listFile.push(SyntheticFile.create_doc(size));
        listFile.push(SyntheticFile.create_docx(size));
        listFile.push(SyntheticFile.create_eot(size));
        listFile.push(SyntheticFile.create_epub(size));
        listFile.push(SyntheticFile.create_gzip(size));
        listFile.push(SyntheticFile.create_gif(size));
        listFile.push(SyntheticFile.create_htm(size));
        listFile.push(SyntheticFile.create_html(size));
        listFile.push(SyntheticFile.create_ico(size));
        listFile.push(SyntheticFile.create_icalendar(size));
        listFile.push(SyntheticFile.create_jar(size));
        listFile.push(SyntheticFile.create_jpeg(size));
        listFile.push(SyntheticFile.create_jpg(size));
        listFile.push(SyntheticFile.create_js(size));
        listFile.push(SyntheticFile.create_json(size));
        listFile.push(SyntheticFile.create_jsonld(size));
        listFile.push(SyntheticFile.create_mid(size));
        listFile.push(SyntheticFile.create_midi(size));
        listFile.push(SyntheticFile.create_x_mid(size));
        listFile.push(SyntheticFile.create_x_midi(size));
        listFile.push(SyntheticFile.create_mjs(size));
        listFile.push(SyntheticFile.create_mp3(size));
        listFile.push(SyntheticFile.create_mp4(size));
        listFile.push(SyntheticFile.create_mpeg(size));
        listFile.push(SyntheticFile.create_mpkg(size));
        listFile.push(SyntheticFile.create_odp(size));
        listFile.push(SyntheticFile.create_ods(size));
        listFile.push(SyntheticFile.create_odt(size));
        listFile.push(SyntheticFile.create_oga(size));
        listFile.push(SyntheticFile.create_ogv(size));
        listFile.push(SyntheticFile.create_ogx(size));
        listFile.push(SyntheticFile.create_opus(size));
        listFile.push(SyntheticFile.create_otf(size));
        listFile.push(SyntheticFile.create_png(size));
        listFile.push(SyntheticFile.create_pdf(size));
        listFile.push(SyntheticFile.create_php(size));
        listFile.push(SyntheticFile.create_ppt(size));
        listFile.push(SyntheticFile.create_pptx(size));
        listFile.push(SyntheticFile.create_rar(size));
        listFile.push(SyntheticFile.create_rtf(size));
        listFile.push(SyntheticFile.create_sh(size));
        listFile.push(SyntheticFile.create_svg(size));
        listFile.push(SyntheticFile.create_swf(size));
        listFile.push(SyntheticFile.create_tar(size));
        listFile.push(SyntheticFile.create_tif(size));
        listFile.push(SyntheticFile.create_tiff(size));
        listFile.push(SyntheticFile.create_ts(size));
        listFile.push(SyntheticFile.create_ttf(size));
        listFile.push(SyntheticFile.create_text(size));
        listFile.push(SyntheticFile.create_typescript(size));
        listFile.push(SyntheticFile.create_vsd(size));
        listFile.push(SyntheticFile.create_wav(size));
        listFile.push(SyntheticFile.create_weba(size));
        listFile.push(SyntheticFile.create_webm(size));
        listFile.push(SyntheticFile.create_webp(size));
        listFile.push(SyntheticFile.create_woff(size));
        listFile.push(SyntheticFile.create_woff2(size));
        listFile.push(SyntheticFile.create_xhtml(size));
        listFile.push(SyntheticFile.create_xlsx(size));
        listFile.push(SyntheticFile.create_xls(size));
        listFile.push(SyntheticFile.create_xml(size));
        listFile.push(SyntheticFile.create_xml_txt(size));
        listFile.push(SyntheticFile.create_xul(size));
        listFile.push(SyntheticFile.create_zip(size));
        //listFile.push(SyntheticFile.create_3gp(size));
        //listFile.push(SyntheticFile.create_3gp2(size));
        //listFile.push(SyntheticFile.create_3gp_a(size));
        //listFile.push(SyntheticFile.create_3gp_v(size));
        //listFile.push(SyntheticFile.create_7z(size));
        listFile.push(SyntheticFile.create_python(size));
        listFile.push(SyntheticFile.create_java(size));
        listFile.push(SyntheticFile.create_react(size));
        listFile.push(SyntheticFile.create_vue(size));
        return listFile;
    };
    return SyntheticFile;
}());
///////////////////// SHORTCUTS
/**
 * Create a list of synthetic files with different mime types
 * @param size the file size for each synthetic file
 * @returns a list of synthetic file
 */
var createListOfMultiTypeFile = function (size) {
    return SyntheticFile.createFileListMiscelanious(size);
};
/**
 * Creates a synthetic file.
 * By default, creates a png image file
 * @param name the file name to show. By default is set to "png-image-file-with-large-name.png"
 * @param size the size in bytes of the file. By default this value is set to 455555
 * @param type the mime type of the file. By default is set to "image/png"
 * @returns
 */
var createSyntheticFile = function (name, size, type) {
    if (name === void 0) { name = "png-image-file-with-large-name.png"; }
    if (size === void 0) { size = 455555; }
    if (type === void 0) { type = "image/png"; }
    return SyntheticFile.createFile(name, size, type);
};

/**
 * An id generator for FileItems
 */
var FileIdGenerator = /** @class */ (function () {
    function FileIdGenerator() {
    }
    /**
     * Increases the id counter and returns the next id available.
     * @returns the next integer id available
     */
    FileIdGenerator.getNextId = function () {
        FileIdGenerator.nextId++;
        return FileIdGenerator.nextId;
    };
    FileIdGenerator.nextId = 0;
    return FileIdGenerator;
}());

/**
 * Converts the fileList into an array of separated ExtFile objects
 * @param fileList the FileList object given by input(event.target.files) or drop operation (event.dataTransfer)
 * @returns an array of ExtFile objects
 */
var fileListToExtFileArray = function (fileList) {
    var extFileArray = [];
    for (var i = 0, f = void 0; (f = fileList[i]); i++) {
        extFileArray.push({ id: FileIdGenerator.getNextId(), file: f, name: f.name, size: f.size, type: f.type });
    }
    return extFileArray;
};
/**
 * Converts the fileList into an array of separated ExtFile instances
 * @param fileList the FileList object given by input (event.target.files) or drop operation (event.dataTransfer)
 * @returns an array of ExtFile instances
 */
var fileListToExtFileInstanceArray = function (fileList) {
    var extFileArray = [];
    for (var i = 0, f = void 0; (f = fileList[i]); i++) {
        extFileArray.push(new ExtFileInstance({ id: FileIdGenerator.getNextId(), file: f, name: f.name, size: f.size, type: f.type }));
    }
    return extFileArray;
};

var isValidateActive = function (accept, maxFileSize, maxFiles, validator) {
    return ((accept !== undefined && accept !== null) ||
        (maxFileSize !== undefined && maxFileSize !== null) ||
        (maxFiles !== undefined && maxFiles !== null) ||
        (validator !== undefined && validator !== null));
};

/**
 * The max size of the word in characters
 */
var DEFAULT_MAX_SIZE_WORD = 30;
/**
 *
 * @param word the word to be shrinked
 * @returns the shrinked word
 */
var shrinkWord = function (word, card) {
    if (word === void 0) { word = ""; }
    if (card === void 0) { card = false; }
    var newWord = word;
    if (card) {
        if (word.length >= 20) {
            newWord = word.slice(0, 10) + "..." + word.slice(-7);
        }
    }
    else if (word.length >= DEFAULT_MAX_SIZE_WORD) {
        newWord = word.slice(0, 13) + "..." + word.slice(-8);
    }
    return newWord;
};

/**
 * Updates a extFile and sets its uploadStatus to "uploading"
 * @param extFile the extended file object
 * @returns the extended file with the uploadStatus attribute modified
 */
var setPrepToUploading = function (extFile) {
    //console.log("prepToUpload One", extFile);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(__assign(__assign({}, extFile), { uploadStatus: "uploading" }));
        }, 1500);
    });
};
/**
 * Updates a extFile and sets its uploadStatus to "success"
 * @param extFile the extended file object
 * @returns the extended file with the uploadStatus attribute modified
 */
var uploadOne = function (extFile) {
    //console.log("upload One", extFile);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(__assign(__assign({}, extFile), { uploadStatus: "success" }));
        }, 2000);
    });
};
/**
 * Awaits the given time before start uploading
 * @param preparingTime the time in miliseconds, by default it will wait 1.5 secs
 * @returns an empty object
 */
var sleepPreparing = function (preparingTime) {
    if (preparingTime === void 0) { preparingTime = 5000; }
    //console.log("uploadfiles preparingTime One", preparingTime);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, preparingTime);
    });
};
/**
 *
 * @param extFileInstance
 * @returns
 */
var prepToUploadOne = function (extFileInstance) {
    //console.log("prepToUpload One", extFileInstance);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            extFileInstance.uploadStatus = "uploading";
            resolve(__assign(__assign({}, extFileInstance), { uploadStatus: "uploading" }));
        }, 1500);
    });
};
/**
 *
 * @param extFileInstance
 * @returns
 */
var uploadOneExtFile = function (extFileInstance) {
    //console.log("upload One", extFileInstance);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            extFileInstance.uploadStatus = "success";
            resolve(__assign(__assign({}, extFileInstance), { uploadStatus: "success" }));
        }, 2000);
    });
};
/**
 *
 * @param extFile the extFile to upload
 * @param DropzoneLocalizer the localization
 * @returns a duiUploadResponse object that describes the result
 */
var fakeFuiUpload = function (extFileInstance, DropzoneLocalizer) {
    if (DropzoneLocalizer === void 0) { DropzoneLocalizer = DropzoneLocalizerSelector("EN-en"); }
    var extFile = extFileInstance.toExtFile();
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var randomNumber = Math.floor(Math.random() * 10);
            if (randomNumber % 2 === 0) {
                var success = true;
                var message = DropzoneLocalizer.fakeuploadsuccess;
                var payload = { url: "" };
                resolve(__assign(__assign({}, extFile), { serverResponse: { success: success, message: message, payload: payload }, uploadStatus: "success", uploadMessage: message }));
            }
            else {
                var success = false;
                var message = DropzoneLocalizer.fakeUploadError;
                var payload = {};
                resolve(__assign(__assign({}, extFile), { serverResponse: { success: success, message: message, payload: payload }, uploadStatus: "error", uploadMessage: message }));
            }
        }, 1700);
    });
};

/**
 * Random integer between min (included) and max (excluded)
 * @param min the min number
 * @param max the max number
 * @returns a random number between min (included) and max (excluded)
 */
function getRandomInt(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 0; }
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Cleans the input.value attribute
 * @param inputElement
 */
var cleanInput = function (inputElement) {
    if (!inputElement)
        return;
    inputElement.value = "";
};

/**
 * If className is given, adds class name in string format to a base class name
 * @param baseClassName the base class name
 * @param className the class name to be added
 * @returns a new class name obtained by adding the second paramater
 */
var addClassName = function (baseClassName, className) {
    if (className)
        return "".concat(baseClassName, " ").concat(className);
    return baseClassName;
};

var isUploadAbleExtFile = function (extFile, validateFilesFlag) {
    return (!validateFilesFlag || (validateFilesFlag && extFile.valid)) && extFile.uploadStatus !== "success";
};

/**
 *
 * @param file
 * @param name
 * @param type
 * @param size
 * @returns the file name, type and size
 */
var getLocalFileItemData = function (file, name, type, size) {
    var localFileName = "";
    var localFileType = undefined;
    var localFileSize = undefined;
    // if file object is valid, obtain metadata from it
    // otherwise try to get file data from individual props in string format
    if (file && typeof file.name === "string") {
        localFileName = file.name;
        localFileType = file.type;
        localFileSize = file.size;
    }
    else if (name && typeof name === "string") {
        localFileName = name;
        localFileType = type;
        localFileSize = size;
    }
    return [localFileName, localFileType, localFileSize];
};

/**
 * Separate the accept string array into an array of strings separated by commas
 * @param accept the string accept array
 * @returns an array of strings in wich every item
 */
var separateAccept = function (accept) {
    if (!accept || accept.length === 0) {
        return [];
    }
    var commaSeparatedAccpet = accept.split(",").map(function (acceptItem) { return acceptItem.trim(); });
    return commaSeparatedAccpet;
};

/**
 * Checks whether a file is valid or not given an array of file extentions and mime types
 * e.g. accept =  [".doc", ".docx", ".xml", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
 * @param accept the array of strings accept items
 * @param file a File object to be evaluated
 * @returns true if the mime type file is included in the accept param
 */
var validateAccept = function (accept, file) {
    var valid = false;
    var name = file.name, type = file.type;
    //Array(5) [ ".doc", ".docx", ".xml", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ]
    for (var i = 0; i < accept.length; i++) {
        var acceptItem = accept[i];
        //check is not empty
        if (acceptItem.length !== 0) {
            //check extention
            if (acceptItem.charAt(0) === ".") {
                if (acceptItem.includes(getExt(name))) {
                    return true;
                }
            }
            //check mime
            // header/tail  => image/png  ;  image/* ; audio
            if (type && type.length > 0 && acceptItem.includes("/") && type.includes("/")) {
                var headerMime = acceptItem.split("/")[0];
                var tailMime = acceptItem.split("/")[1];
                var headerMimeFile = type.split("/")[0];
                var tailMimeFile = type.split("/")[1];
                if (headerMime === headerMimeFile) {
                    //    image/*
                    if (tailMime === "*") {
                        return true;
                    }
                    else if (tailMime === tailMimeFile) {
                        return true;
                    }
                }
            }
        }
    }
    return valid;
};

/**
 *
 * @param preValidatedFiles FileList
 * @param remainingValids The number of remaining valid files
 * @param localValidator
 * @param validator
 * @param maxFiles
 * @param localization
 * @returns
 */
var fileListvalidator = function (preValidatedFiles, remainingValids, localValidator, validator, maxFiles, localization) {
    var output = [];
    //set a countdown when there is a limit on files
    var countdown = remainingValids;
    // get localized labels
    var ValidationErrorLocalizer = ValidateErrorLocalizerSelector(localization);
    //Iterate the File list
    for (var i = 0, f = void 0; (f = preValidatedFiles[i]); i++) {
        // Validate the file list with
        var validatedFile = validateFile(f, validator, localValidator, ValidationErrorLocalizer);
        if (validatedFile.valid) {
            //not valid due to file count limit
            var valid = countdown > 0;
            validatedFile.valid = valid;
            //add error about amount
            if (!valid) {
                var maxFileErrorMessenger = ValidationErrorLocalizer.maxFileCount;
                validatedFile.errors = validatedFile.errors
                    ? __spreadArray(__spreadArray([], validatedFile.errors, true), [maxFileErrorMessenger(maxFiles || Infinity)], false) : [maxFileErrorMessenger(maxFiles || Infinity)];
            }
            countdown--;
        }
        output.push(validatedFile);
    }
    return output;
};
/**
 * For each ExtFile sets the valid prop of ExtFile to "true" or "false"
 * depending on the result of the individual validation.
 * It also add the list of errors.
 * @param extFileList
 * @param remainingValids
 * @param localValidatorProps
 * @param validator
 * @param maxFiles
 * @param localization
 * @returns a new ExtFile list with each item validated
 */
var validateExtFileList = function (extFileList, remainingValids, localValidatorProps, validator, maxFiles, localization) {
    //console.log("remaning valids", remainingValids);
    var fileListResult = [];
    if (!remainingValids)
        return fileListResult;
    var remaining = remainingValids;
    var ValidationErrorLocalizer = ValidateErrorLocalizerSelector(localization);
    var maxFileErrorMessenger = ValidationErrorLocalizer.maxFileCount;
    for (var i = 0; i < extFileList.length; i++) {
        var currentExtFile = extFileList[i];
        currentExtFile = validateExtFile(currentExtFile, validator, localValidatorProps, ValidationErrorLocalizer);
        //console.log("validateExtFileList after validation", currentExtFile);
        if (currentExtFile.valid) {
            //not valid due to file count limit
            var valid = remaining > 0;
            currentExtFile.valid = valid;
            //add error about amount
            if (!valid) {
                currentExtFile.errors = currentExtFile.errors
                    ? __spreadArray(__spreadArray([], currentExtFile.errors, true), [maxFileErrorMessenger(maxFiles || Infinity)], false) : [maxFileErrorMessenger(maxFiles || Infinity)];
            }
            remaining--;
        }
        fileListResult.push(currentExtFile);
    }
    return fileListResult;
};
/**
 *
 * @param extFile
 * @param validator
 * @param validatorProps
 * @param localErrors
 * @returns
 */
var validateExtFile = function (extFile, validator, validatorProps, localErrors) {
    var extFileResult = __assign({}, extFile);
    var errors = [];
    //TO-DO: Add extra validation for individual props even if FIle object was not given
    if (!extFile.file) {
        return __assign({}, extFileResult);
    }
    //TO-DO: add "overrideValidation" prop to ignore the rest of validators like accept and maxFileSize
    if (validator) {
        var resultCustomValidation = validator(extFileResult.file);
        var errorsResult = resultCustomValidation.errors;
        if (errorsResult)
            errors.push.apply(errors, errorsResult);
        //return { ...extFileResult, ...validator(extFileResult.file as File) };
    }
    var maxFileSize = validatorProps.maxFileSize, accept = validatorProps.accept;
    //console.log("Validation", maxFileSize, accept);
    //check file size
    var file = extFile.file;
    if (maxFileSize && file.size > maxFileSize) {
        var maxFileSizeErrorMessenger = localErrors.maxSizeError;
        //console.log("Size error", maxFileSizeErrorMessenger(maxFileSize));
        errors.push(maxFileSizeErrorMessenger(maxFileSize));
    }
    //check file type
    if (accept && !validateAccept(separateAccept(accept), file)) {
        errors.push(localErrors.acceptError);
    }
    var isValid = errors.length === 0;
    extFileResult = __assign(__assign({}, extFileResult), { valid: isValid, errors: !isValid ? errors : undefined });
    //console.log("validation extFileResult", extFileResult);
    return extFileResult;
};
/**
 * Function that validate whether a file is valid, or not
 * according to the Filevalidator properties
 * @param file a File object to be evaluated
 * @param validatorProps the validator object
 * @returns a FileValidated object
 */
var validateFile = function (file, validator, validatorProps, localErrors) {
    var idGenerated = FileIdGenerator.getNextId();
    var errors = [];
    if (validator) {
        return __assign({ id: idGenerated, file: file }, validator(file));
    }
    var maxFileSize = validatorProps.maxFileSize, accept = validatorProps.accept;
    //check file size
    if (maxFileSize && file.size > maxFileSize) {
        var maxFileSizeErrorMessenger = localErrors.maxSizeError;
        errors.push(maxFileSizeErrorMessenger(maxFileSize));
    }
    //check file type
    // const allowedTypes = accept.filter((type) => (file.type === type))
    if (accept && !validateAccept(separateAccept(accept), file)) {
        errors.push(localErrors.acceptError);
    }
    var fileResult = {
        id: idGenerated,
        file: file,
        valid: errors.length === 0,
        errors: errors
    };
    // logic here
    return fileResult;
};

/**
 * Generates a random number betwen 0 and 3
 * where
 * 0 => error
 * 1 => uploading
 * 2 => success
 * 3 => undefined
 * @returns a random upload status or undefined
 */
var getRandomUploadStatus = function () {
    var result = getRandomInt(0, 4);
    switch (result) {
        case 0: return "error";
        case 1: return "uploading";
        case 2: return "success";
        default:
            return undefined;
    }
};

/**
 * list of dumy errors in english
 */
var listOfErrors = [
    "File is too big. Max file size allowed is 80mb.",
    "File's type is not allowed.",
    "Max amount of files (28) has been reached."
];

/**
 * Make a validated file that is ready to be used on FileItem component,
 * if valid is not set, a random operation will decide whether the file is valid or not
 * If valid is false, then the natural order is not to be uploadable and wont have upload message nor upload status
 * If valid is true, then file can be uploaded and can have upload message if the status is succes or error
 * @param file The file
 * @param valid true if it is a valid file, otherwise is false
 * @param uploadStatus the current upload status. If not given a random upload status will be set
 * @param uploadMessage the upload message after uploading
 * @returns a Vaidated File object
 */
var makeSyntheticExtFile = function (file, valid, uploadStatus, uploadMessage) {
    if (valid === void 0) { valid = (Math.ceil(Math.random() * 28) % 2 === 0); }
    //if valid, naturally, can be uploaded
    var errors = [];
    var newUpoadStatus = uploadStatus || getRandomUploadStatus();
    var customUploadMessage = uploadMessage || "";
    if (valid) {
        //we can decide according to upload status 
        if (!uploadMessage) {
            switch (newUpoadStatus) {
                case "error":
                    customUploadMessage = "Upload failed. There was an error";
                    break;
                case "success":
                    customUploadMessage = "File was successfully upload";
                    break;
                default: uploadMessage = undefined;
            }
        }
        errors = undefined;
    }
    else {
        //if not valid, just show error messages
        var randInt = getRandomInt(0, 3);
        errors.push(listOfErrors[randInt]);
        newUpoadStatus = undefined;
        customUploadMessage = undefined;
    }
    //now make a File Validated instance 
    var newFileValidated = {
        id: FileIdGenerator.getNextId(),
        valid: valid,
        file: file,
        uploadStatus: newUpoadStatus,
        uploadMessage: customUploadMessage,
        errors: errors
    };
    return newFileValidated;
};

var extFileMock = function (id) {
    return {
        id: id || FileIdGenerator.getNextId(),
        name: "fileName.ext",
        size: 28 * 1024 * 1024,
        type: "files-ui/mock",
        file: createSyntheticFile("fileName.ext", 28 * 1024 * 1024, "files-ui/mock"),
        errors: listOfErrors,
        uploadMessage: "uploaded",
        uploadStatus: "preparing",
        valid: false,
        progress: 28,
        xhr: new XMLHttpRequest(),
        extraData: {
            extraData1: "files-ui is the best",
            extraData2: {
                id: 1,
                name: "files-ui.mock"
            },
            deleted: true
        },
        downloadUrl: "https://www.files-ui.com/mock/file-download",
        uploadUrl: "https://www.files-ui.com/mock/file"
    };
};

function addExtraData(formData, extraData) {
    //headers
    var extraDataKeys = Object.keys(extraData || {});
    //const headerValues: string[] = Object.values(headers);
    for (var i = 0; i < extraDataKeys.length && extraData; i++) {
        //console.log("uploadFile extraData", extraDataKeys[i], extraData[extraDataKeys[i]]);
        formData.append(extraDataKeys[i], extraData[extraDataKeys[i]]);
    }
    // formData.append("otherValue", "HAAAAAAAAAAAAAAa");
}

function addHeaders(xhr, headers) {
    //headers
    var headerKeys = Object.keys(headers || {});
    //const headerValues: string[] = Object.values(headers);
    for (var i = 0; i < headerKeys.length && headers; i++) {
        //console.log("uploadFile headers", headerKeys[i], headers[headerKeys[i]]);
        xhr.setRequestHeader(headerKeys[i], headers[headerKeys[i]]);
    }
}

var NO_URL_MESSAGE = "Unable to upload. A valid url was not provided";
var NO_XHR_MESSAGE = "Unable to upload. xhr object was not provided";

var TIMEOUT_ERROR_RESPONSE = {
    success: false,
    message: "Timeout error",
    payload: {}
};
var ABORTED_ERROR_RESPONSE = {
    success: false,
    message: "Upload aborted",
    payload: {}
};
var JSON_PARSE_ERROR_RESPONSE = {
    success: false,
    message: "Error when parsing JSON response",
    payload: {}
};
var UNEXPECTED_ERROR_RESPONSE = {
    success: false,
    message: "Unexpected error",
    payload: {}
};
var NO_XHR_PROVIDED_ERROR = function (extFile) {
    return __assign(__assign({}, extFile), { uploadMessage: NO_XHR_MESSAGE, uploadStatus: "error", serverResponse: { success: false, } });
};
var NO_URL_PROVIDED_ERROR = function (extFile) {
    return __assign(__assign({}, extFile), { uploadMessage: NO_URL_MESSAGE, uploadStatus: "error", serverResponse: { success: false, } });
};

var makeServerResponse = function (success, message, payload) {
    var result = { success: success, message: message, payload: payload };
    return result;
};
var JsonParseResponse = function (xhr) {
    try {
        var jsonResponse = JSON.parse(xhr.response);
        var success = (xhr.status >= 200 && xhr.status < 300) ? true : typeof jsonResponse.success === "boolean" ? jsonResponse.success : false;
        var message = typeof jsonResponse.message === "string" ? jsonResponse.message :
            success ?
                "Upload compete!. No message from server found."
                : "Error on upload. No message from server found.";
        var payload = jsonResponse.payload || jsonResponse || {};
        var fuiResponse = {
            success: success,
            message: message,
            payload: payload
        };
        return fuiResponse;
    }
    catch (error) {
        //console.log("FuiUpload ERROR", error);
        return JSON_PARSE_ERROR_RESPONSE;
    }
};
var makeSuccessUploadResponse = function (extFile, responseFui) {
    return __assign(__assign({}, extFile), { serverResponse: responseFui, uploadMessage: responseFui.message, uploadStatus: "success" });
};
var makeErrorUploadResponse = function (extFile, responseFui) {
    //console.log("makeErrorUploadResponse", extFile, responseFui);
    return __assign(__assign({}, extFile), { uploadMessage: responseFui.message, uploadStatus: "error", serverResponse: responseFui });
};

/**
 * Uploads one formData object to a given endpoint in a promisified way
 * @param xhr XMLHTTPrequest object
 * @param method method for uploading
 * @param endpoint endpoint to upload the file
 * @param data FromData object to perform multipart form data upload
 * @param headers the set of headers
 * @returns a server response that consists on {status, payload, message}
 */
var uploadBlob = function (xhr, method, endpoint, data, headers) {
    if (method === void 0) { method = "POST"; }
    return new Promise(function (resolve, reject) {
        //console.log("Fui_uploadFormData uploadFile", xhr, method, endpoint, data, headers);
        console.log("uploadBlob => BLOB");
        var finalMethod = ["POST", "PUT", "PATCH"].includes(method.toUpperCase()) ? method : "POST";
        xhr.upload.onload = function () {
            //console.log("Fui_uploadFormData uploadFile onLoad", xhr.readyState, xhr.response);
        };
        xhr.upload.ontimeout = function () { return resolve(TIMEOUT_ERROR_RESPONSE); };
        xhr.upload.onabort = function () {
            //console.log("Fui_uploadFormData ABORTEEEEDDDD");
            resolve(ABORTED_ERROR_RESPONSE);
        };
        xhr.onloadend = function (e) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        // listen for `progress` event
        //currently listening on FileItem component hook
        xhr.onreadystatechange = function (e) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //console.log("Finished", xhr);
                //console.log("Fui_uploadFormData uploadFile onreadystatechange e.type", e.type);
                //console.log("Fui_uploadFormData uploadFile onreadystatechange", xhr.readyState, xhr.response);
                //lastLastState = lastState;
                //lastState = xhr.readyState;
                if (xhr.readyState === 4) {
                    if (xhr.response !== "") {
                        //there is th answer
                        resolve(JsonParseResponse(xhr));
                    }
                    else {
                        //error unexpected
                        resolve(ABORTED_ERROR_RESPONSE);
                    }
                } //else {
                return [2 /*return*/];
            });
        }); };
        // open request
        xhr.open(finalMethod, endpoint, true);
        //add header to request
        addHeaders(xhr, headers);
        //start uploading
        //const blob:Blob = new Blob(data., { type: "text/plain" });
        xhr.send(data);
    });
};
/**
 * Uploads one formData object to a given endpoint in a promisified way
 * @param xhr XMLHTTPrequest object
 * @param method method for uploading
 * @param endpoint endpoint to upload the file
 * @param data FromData object to perform multipart form data upload
 * @param headers the set of headers
 * @returns a server response that consists on {status, payload, message}
 */
var uploadFormData = function (xhr, method, endpoint, data, headers) {
    if (method === void 0) { method = "POST"; }
    return new Promise(function (resolve, reject) {
        //console.log("Fui_uploadFormData uploadFile", xhr, method, endpoint, data, headers);
        var finalMethod = ["POST", "PUT", "PATCH"].includes(method.toUpperCase()) ? method : "POST";
        /*   let lastLastState: number = -1;
          let lastState: number = 0;
          let jumped: boolean = false; */
        xhr.upload.onload = function () {
            //console.log("Fui_uploadFormData uploadFile onLoad", xhr.readyState, xhr.response);
        };
        xhr.upload.ontimeout = function () { return resolve(TIMEOUT_ERROR_RESPONSE); };
        xhr.upload.onabort = function () {
            //console.log("Fui_uploadFormData ABORTEEEEDDDD");
            resolve(ABORTED_ERROR_RESPONSE);
        };
        xhr.onloadend = function (e) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        // listen for `progress` event
        //currently listening on FileItem component hook
        xhr.onreadystatechange = function (e) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //console.log("Finished", xhr);
                //console.log("Fui_uploadFormData uploadFile onreadystatechange e.type", e.type);
                //console.log("Fui_uploadFormData uploadFile onreadystatechange", xhr.readyState, xhr.response);
                //lastLastState = lastState;
                //lastState = xhr.readyState;
                if (xhr.readyState === 4) {
                    if (xhr.response !== "") {
                        //there is th answer
                        resolve(JsonParseResponse(xhr));
                    }
                    else {
                        //error unexpected
                        // console.log("Fui_uploadFormData EMPTY status", xhr.status);
                        // console.log("Fui_uploadFormData EMPTY readyState", xhr.readyState);
                        // console.log("Fui_uploadFormData EMPTY upload", xhr.upload);
                        //console.log("Fui_uploadFormData EMPTY abort", xhr.abort);
                        //const jumped = lastLastState - lastLastState !== 1;
                        resolve(ABORTED_ERROR_RESPONSE);
                    }
                }
                return [2 /*return*/];
            });
        }); };
        // open request
        xhr.open(finalMethod, endpoint, true);
        //add header to request
        addHeaders(xhr, headers);
        //start uploading
        xhr.send(data);
    });
};
/**
 * Method that perfomrs the upload operation for an ExtFIle
 * @param file the extended file to be uploaded
 * @param url the endpoint
 * @param urlFromExtFile a function to generate the url for each ExtFile
 * @param method the method for uploading
 * @param headers headers for request
 * @param asBlob if true, it wil upload file as blob instead of uploadint it as FormData.
 * @returns The extFile with upload values modified
 */
var uploadExtFile = function (extFile, url, urlFromExtFile, method, headers, uploadLabel, asBlob) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(void 0, void 0, void 0, function () {
                var uploader, finalUrl, localMethod, fileToUpload, formData, finalExtraData, responseFui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            uploader = extFile.xhr;
                            if (!uploader) {
                                resolve(NO_XHR_PROVIDED_ERROR(extFile));
                                return [2 /*return*/];
                            }
                            finalUrl = extFile.uploadUrl || (urlFromExtFile === null || urlFromExtFile === void 0 ? void 0 : urlFromExtFile(extFile)) || url;
                            if (finalUrl == undefined || finalUrl.length == 0) {
                                resolve(NO_URL_PROVIDED_ERROR(extFile));
                                return [2 /*return*/];
                            }
                            localMethod = method || "POST";
                            fileToUpload = extFile.file;
                            formData = new FormData();
                            formData.append(uploadLabel || "file", fileToUpload);
                            finalExtraData = __assign({}, extFile.extraUploadData);
                            addExtraData(formData, finalExtraData);
                            responseFui = void 0;
                            if (!asBlob) return [3 /*break*/, 2];
                            return [4 /*yield*/, uploadBlob(uploader, localMethod, finalUrl, fileToUpload, headers || {})];
                        case 1:
                            responseFui = _a.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, uploadFormData(uploader, localMethod, finalUrl, formData, headers || {})];
                        case 3:
                            responseFui = _a.sent();
                            _a.label = 4;
                        case 4:
                            if (responseFui.success) {
                                // status is true
                                resolve(makeSuccessUploadResponse(extFile, responseFui));
                            }
                            else {
                                // status is false
                                resolve(makeErrorUploadResponse(extFile, responseFui));
                            }
                            return [3 /*break*/, 6];
                        case 5:
                            _a.sent();
                            // on error
                            //console.log("uploadPromiseXHR uploadPromiseXHR ERROR", error);
                            resolve(makeErrorUploadResponse(extFile, UNEXPECTED_ERROR_RESPONSE));
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
function uploadFile(file, url, method, label, headers) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var formData, serverResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = new FormData();
                    formData.append(label || "file", file);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, uploadFormData(new XMLHttpRequest(), method, url, formData, headers)];
                case 2:
                    serverResponse = _a.sent();
                    resolve(serverResponse);
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    // on error
                    //console.log("uploadPromiseXHR uploadPromiseXHR ERROR", error);
                    resolve(UNEXPECTED_ERROR_RESPONSE);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}

var unexpectedErrorUploadResult = function (extFile) {
    return __assign(__assign({}, extFile), { uploadMessage: "Unexpected error", uploadStatus: "error", serverResponse: {
            success: false,
            message: "Error on upload: unexpected error ",
            payload: {},
        } });
};
var unableToUploadResult = function (extFile) {
    return {
        id: extFile.id,
        uploadedFile: __assign(__assign({}, extFile), { uploadMessage: "Unable to upload. XHR was not provided", uploadStatus: "error" }),
        serverResponse: {
            success: false,
            message: "Error on upload: Unable to upload. XHR was not provided ",
            payload: {},
        }
    };
};
var completeUploadResult = function (extFile, serverResponse, uploadStatusresult) {
    return {
        id: extFile.id,
        uploadedFile: __assign(__assign({}, extFile), { uploadMessage: serverResponse.message, uploadStatus: uploadStatusresult }),
        serverResponse: serverResponse
    };
};
/**
 * Initializes the xhr attribute for performing uploads
 * @param extFileList the list of extended files
 * @returns the array of extFiles with the xhr attribute initialized
 */
var toUploadableExtFileList = function (extFileList) {
    if (!extFileList)
        return [];
    return extFileList.map(function (extFile) {
        return __assign(__assign({}, extFile), { xhr: new XMLHttpRequest() });
    });
};
/**
 * Updates the uploadStatus of the given extFile
 * from "preparing" to "uploading"
 * @param extFile the extended file
 * @returns the extended file with uploadStatus updated to "uploading"
 */
var instantPreparingToUploadOne = function (extFile) {
    if (extFile.uploadStatus === "preparing") {
        //for ExtFile instance
        extFile.uploadStatus = "uploading";
        //for ExtFile type
        return __assign(__assign({}, extFile), { uploadStatus: "uploading" });
    }
    return extFile;
};
/**
 * If current uploadStatus is "preparing" it changes it to "uploading".
 * Otherwise it will return the exact same input.
 * @param extFile the extended file
 * @returns the extFile with the upload status changed
 */
var preparingToUploadOne = function (extFile) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (extFile.uploadStatus === "preparing") {
                //for ExtFile instance
                extFile.uploadStatus = "uploading";
                //for ExtFile type
                resolve(__assign(__assign({}, extFile), { uploadStatus: "uploading" }));
            }
            else
                resolve(extFile);
        }, 1500);
    });
};
/**
 * Sleeps for 1200 miliseconds for showing a better transition
 * on uploading
 * @param time the time to sleep in miliseconds
 * @returns true is everything is ok
 */
var sleepTransition = function (time) {
    if (time === void 0) { time = 1500; }
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(true);
        }, time);
    });
};
/**
 * Removes the deleted files and updates the aborted ones with a message
 * @param arrExtFile incomming arr of extFle instances
 * @returns an array of ExtFle objects
 */
var sanitizeArrExtFile = function (arrExtFile) {
    return arrExtFile.filter(function (extFileInstance) { var _a; return !((_a = extFileInstance.extraData) === null || _a === void 0 ? void 0 : _a.deleted); })
        .map(function (extFileInstance) {
        if (extFileInstance.uploadStatus === "aborted"
            && !extFileInstance.uploadMessage) {
            // TO-DO: ad localization for this message
            extFileInstance.uploadMessage = "Upload aborted by user";
            //extFileInstance.uploadStatus = "error";
        }
        return ExtFileInstance.toExtFile(extFileInstance);
    });
};
/**
 *
 * @param extFileInstance
 * @param extFileobj
 */
var setNextUploadStatus = function (extFileInstance, extFileobj) {
    var prevStatus = extFileInstance.uploadStatus;
    var nextStstaus = extFileobj.uploadStatus;
    //console.log("setNextUploadStatus", prevStatus, nextStstaus);
    //console.log("setNextUploadStatus", extFileInstance.uploadMessage, extFileobj.uploadMessage);
    if (prevStatus === "preparing" &&
        ["aborted", undefined].includes(nextStstaus)) {
        extFileInstance.uploadStatus = undefined;
        extFileInstance.uploadMessage = extFileobj.uploadMessage;
    }
    else if (prevStatus === "uploading" &&
        ["aborted", undefined].includes(nextStstaus)) {
        extFileInstance.uploadStatus = "aborted";
        extFileInstance.uploadMessage = extFileobj.uploadMessage;
    }
};

/**
 * The full list of named Colors provided by
 * https://htmlcolorcodes.com/es/nombres-de-los-colores/
 */
var NAMED_COLORS = {
    //RED
    indianred: "#CD5C5C",
    lightcoral: "#F08080",
    salmon: "#FA8072",
    darksalmon: "#E9967A",
    lightsalmon: "#FFA07A",
    crimson: "#DC143C",
    red: "#FF0000",
    firebrick: "#B22222",
    darkred: "#8B0000",
    //PINK
    pink: "#FFC0CB",
    lightpink: "#FFB6C1",
    hotpink: "#FF69B4",
    deeppink: "#FF1493",
    mediumvioletred: "#C71585",
    palevioletred: "#DB7093",
    //ORANGE
    //"lightsalmon: "#FFA07A",
    coral: "#FF7F50",
    tomato: "#FF6347",
    orangered: "#FF4500",
    darkorange: "#FF8C00",
    orange: "#FFA500",
    //YELLOW
    gold: "#FFD700",
    yellow: "#FFFF00",
    lightyellow: "#FFFFE0",
    lemonchiffon: "#FFFACD",
    lightgoldenrodyellow: "#FAFAD2",
    papayawhip: "#FFEFD5",
    moccasin: "#FFE4B5",
    peachpuff: "#FFDAB9",
    palegoldenrod: "#EEE8AA",
    khaki: "#F0E68C",
    darkkhaki: "#BDB76B",
    //PURPLE
    lavender: "#E6E6FA",
    thistle: "#D8BFD8",
    plum: "#DDA0DD",
    violet: "#EE82EE",
    orchid: "#DA70D6",
    fuchsia: "#FF00FF",
    magenta: "#FF00FF",
    mediumorchid: "#BA55D3",
    mediumpurple: "#9370DB",
    rebeccapurple: "#663399",
    blueviolet: "#8A2BE2",
    darkviolet: "#9400D3",
    darkorchid: "#9932CC",
    darkmagenta: "#8B008B",
    purple: "#800080",
    indigo: "#4B0082",
    slateblue: "#6A5ACD",
    darkslateblue: "#483D8B",
    mediumslateblue: "#7B68EE",
    //GREEN
    greenyellow: "#ADFF2F",
    chartreuse: "#7FFF00",
    lawngreen: "#7CFC00",
    lime: "#00FF00",
    limegreen: "#32CD32",
    palegreen: "#98FB98",
    lightgreen: "#90EE90",
    mediumspringgreen: "#00FA9A",
    springgreen: "#00FF7F",
    mediumseagreen: "#3CB371",
    seagreen: "#2E8B57",
    forestgreen: "#228B22",
    green: "#008000",
    darkgreen: "#006400",
    yellowgreen: "#9ACD32",
    olivedrab: "#6B8E23",
    olive: "#808000",
    darkolivegreen: "#556B2F",
    mediumaquamarine: "#66CDAA",
    darkseagreen: "#8FBC8B",
    lightseagreen: "#20B2AA",
    darkcyan: "#008B8B",
    teal: "#008080",
    //BLUE
    aqua: "#00FFFF",
    cyan: "#00FFFF",
    lightcyan: "#E0FFFF",
    paleturquoise: "#AFEEEE",
    aquamarine: "#7FFFD4",
    turquoise: "#40E0D0",
    mediumturquoise: "#48D1CC",
    darkturquoise: "#00CED1",
    cadetblue: "#5F9EA0",
    steelblue: "#4682B4",
    lightsteelblue: "#B0C4DE",
    powderblue: "#B0E0E6",
    lightblue: "#ADD8E6",
    skyblue: "#87CEEB",
    lightskyblue: "#87CEFA",
    deepskyblue: "#00BFFF",
    dodgerblue: "#1E90FF",
    cornflowerblue: "#6495ED",
    //"mediumslateblue: "#7B68EE",
    royalblue: "#4169E1",
    blue: "#0000FF",
    mediumblue: "#0000CD",
    darkblue: "#00008B",
    navy: "#000080",
    midnightblue: "#191970",
    //BROWN
    cornsilk: "#FFF8DC",
    blanchedalmond: "#FFEBCD",
    bisque: "#FFE4C4",
    navajowhite: "#FFDEAD",
    wheat: "#F5DEB3",
    burlywood: "#DEB887",
    tan: "#D2B48C",
    rosybrown: "#BC8F8F",
    sandybrown: "#F4A460",
    goldenrod: "#DAA520",
    darkgoldenrod: "#B8860B",
    peru: "#CD853F",
    chocolate: "#D2691E",
    saddlebrown: "#8B4513",
    sienna: "#A0522D",
    brown: "#A52A2A",
    maroon: "#800000",
    //WHITE
    white: "#FFFFFF",
    snow: "#FFFAFA",
    honeydew: "#F0FFF0",
    mintcream: "#F5FFFA",
    azure: "#F0FFFF",
    aliceblue: "#F0F8FF",
    ghostwhite: "#F8F8FF",
    whitesmoke: "#F5F5F5",
    seashell: "#FFF5EE",
    beige: "#F5F5DC",
    oldlace: "#FDF5E6",
    floralwhite: "#FFFAF0",
    ivory: "#FFFFF0",
    antiquewhite: "#FAEBD7",
    linen: "#FAF0E6",
    lavenderblush: "#FFF0F5",
    mistyrose: "#FFE4E1",
    //GREY
    gainsboro: "#DCDCDC",
    lightgray: "#D3D3D3",
    silver: "#C0C0C0",
    darkgray: "#A9A9A9",
    gray: "#808080",
    dimgray: "#696969",
    lightslategray: "#778899",
    slategray: "#708090",
    darkslategray: "#2F4F4F",
    black: "#000000"
};

/**
 * Make the color into a darker color
 * @param colorInput
 * @returns the darked color in
 */
var darkerColor = function (colorInput, percentage) {
    if (percentage === void 0) { percentage = 25; }
    var darkedColor = "";
    var reduce = (100 - percentage) / 100;
    var component1 = 0;
    var component2 = 0;
    var component3 = 0;
    if (isHexColor(colourNameToHex(colorInput))) {
        component1 = hexTodec(colorInput.charAt(1)) * 16 + hexTodec(colorInput.charAt(2));
        component2 = hexTodec(colorInput.charAt(3)) * 16 + hexTodec(colorInput.charAt(4));
        component3 = hexTodec(colorInput.charAt(5)) * 16 + hexTodec(colorInput.charAt(6));
        darkedColor = "rgb(".concat(component1 * reduce, ", ").concat(component2 * reduce, ",").concat(component3 * reduce, ")");
    }
    else {
        if (colorInput.includes("rgba")) {
            var slicer = colorInput.replace("rgba(", "");
            var components = slicer.split(",");
            darkedColor = "rgb(".concat(parseInt(components[0], 10) * reduce, ", ").concat(parseInt(components[1], 10) * reduce, ",").concat(parseInt(components[2], 10) * reduce, ")");
            //return darkedColor;
        }
        else if (colorInput.includes("rgb")) {
            var slicer = colorInput.replace("rgb(", "");
            var components = slicer.split(",");
            darkedColor = "rgb(".concat(parseInt(components[0], 10) * reduce, ", ").concat(parseInt(components[1], 10) * reduce, ",").concat(parseInt(components[2], 10) * reduce, ")");
            // return darkedColor;
        }
    }
    return darkedColor;
};
/**
 * In order to managae rgba() we convert hex colors into rgba()
 * If the given color is already a rgb() color, it can add the percentage to convert it into rgba()
 *
 *
 * @param colorInput color in hex or in rgb
 * @param perc percentage for RGBA() color
 * @returns the rgba representation of a hex color
 */
var hexColorToRGB = function (colorInput, perc, defaultColor) {
    if (perc === void 0) { perc = 0; }
    var resultDefault = defaultColor ? defaultColor : "rgba(255, 255, 255, 0.6)";
    if (!colorInput) {
        return resultDefault;
    }
    //work only in uppercase
    var color = colorInput.toUpperCase();
    // is already a rgba color
    if (color.includes("RGBA")) {
        return color;
    }
    //return rbg => rgba
    if (color.includes("RGB")) {
        return color.replace('RGB', "rgba").replace(')', ", ".concat(perc, ")"));
    }
    // if is a hex color or named color
    if (!isHexColor(colourNameToHex(color))) {
        return resultDefault;
    }
    var resultOk = "";
    //let strVar: string = "";
    var component1 = 0;
    var component2 = 0;
    var component3 = 0;
    //If passed all validations, proceed to transform
    component1 = hexTodec(color.charAt(1)) * 16 + hexTodec(color.charAt(2));
    component2 = hexTodec(color.charAt(3)) * 16 + hexTodec(color.charAt(4));
    component3 = hexTodec(color.charAt(5)) * 16 + hexTodec(color.charAt(6));
    resultOk = "rgba(".concat(component1, ", ").concat(component2, ",").concat(component3, " , ").concat(perc, ")");
    return resultOk;
};
/**
 * Validates wheteher the color is hexadecimal css color
 * Example:  #FF56AC
 *
 *
 * @param colorInput the color inpt to test
 * @returns true if the inputColor is a hexadecimal css color
 */
var isHexColor = function (colorInput) {
    // if first element is no '#' return default background color
    if (colorInput.charAt(0) !== '#') {
        return false;
    }
    // if color lenght is not exactly 7 return default
    if (colorInput.length !== 7) {
        return false;
    }
    // if one of the letters is not included in hex array return  default
    for (var i = 1; i < colorInput.length; i++) {
        if (!hexArray.includes(colorInput.charAt(i))) {
            return false;
        }
    }
    return true;
};
/**
 * Converts a named color into hexadecimal color
 * from a list of well known namd colors if found.
 * When not given returns a ""
 * When not found in the list, returns the same value given
 * @param colour the named color
 * @returns The hex representation of the color or "" or the same color
 */
function colourNameToHex(colour) {
    /**
     * When not given
     */
    if (!colour) {
        return "";
    }
    /**
     * when named color is found
     */
    if (NAMED_COLORS[colour.toLocaleLowerCase()] !== undefined) {
        return NAMED_COLORS[colour.toLocaleLowerCase()];
    }
    /**
     * When the named color was not found
     */
    return colour;
}
/**
 * hexArray & decArray
 *
 * arrays of numbers used to convert hexadecimal numbers into decimal and viceversa
 */
var hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var decArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
/**
 * Converts hex number in string representation to decimal number
 *
 *
 * @param letter the string hex number
 * @returns a decimal number
 */
var hexTodec = function (letter) {
    if (hexArray.includes(letter)) {
        return decArray[hexArray.indexOf(letter)];
    }
    else {
        return 0;
    }
};
/**
 * Asure a base color. When not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 *
 * @param color param color given by user
 * @returns returns the same color
 */
var asureColor = function (color) {
    if (color !== undefined && color !== "") {
        return color;
    }
    else {
        return DEFAULT_FONT_COLOR;
    }
};
/**
 * Asure a base color. When not given or when given an incorrect color format
 * default color is this kind of grey #5d6475
 *
 * @param color param color given by user
 * @returns returns the same color
 */
var completeAsureColor = function (color, perc) {
    if (perc === void 0) { perc = 1; }
    return hexColorToRGB(asureColor(colourNameToHex(color)), perc);
};
var DEFAULT_FONT_COLOR = "#646c7f";

var extFileReconcilation = function (dropzoneId, extFileIncomming) {
    var result = [];
    var arrOfExtFiles = ExtFileManager.getExtFileInstanceList(dropzoneId);
    // continue only if arrOfExtFiles exists
    if (arrOfExtFiles) {
        //different sizes means there was deleted files
        //also can be new files to be uploaded
        //needed an extra flag to allow add files in the middle of uploading process
        // if new files are added, they are added to the Manager
        // outside they were already added to the UI
        // inside Dropzone, will be needed a .next() method for manager
        // 1st allow deleted files and ignore new ones
        // reduce the arrOfExtFileInstances array
        // parecido a listas ligadas, iterar hasta encontrar null XD
        var incommingTemp = __spreadArray([], extFileIncomming, true);
        incommingTemp = incommingTemp.filter(function (F) { return (arrOfExtFiles === null || arrOfExtFiles === void 0 ? void 0 : arrOfExtFiles.findIndex(function (I) { return I.id === F.id; })) === -1; });
        //console.log("reconciliation incommingTemp", incommingTemp);
        //different sizes not allowed
        if (arrOfExtFiles.length !== extFileIncomming.length || extFileIncomming.length === 0) {
            return undefined;
        }
        for (var i = 0; i < arrOfExtFiles.length; i++) {
            if ((extFileIncomming[i].uploadStatus === undefined)
                &&
                    (arrOfExtFiles[i].uploadStatus === "preparing")) {
                //console.log("useDropzoneFileListUpdater onCancel i", i);
                arrOfExtFiles[i].uploadStatus = undefined;
            }
        }
    }
    return result;
};

/**
 * Merge props that come form user and those ones that are by default
 * if incommingProps is null this returns the default props value
 *
 * @param incommingProps prop that comes from props attributoo of a React Node
 * @param defaultProps default prop defined for that  React Node
 * @returns merged props
 */
function mergeProps(incommingProps, defaultProps) {
    //console.log("incommingProps",incommingProps);
    if (!incommingProps) {
        return defaultProps;
    }
    else {
        return __assign$1(__assign$1({}, defaultProps), incommingProps);
    }
}

var InputHidden = function (props) {
    var onChange = props.onChange, inputRef = props.inputRef, accept = props.accept, multiple = props.multiple;
    /* function handleClick<T extends HTMLInputElement>(
      evt: React.MouseEvent<T, MouseEvent>
    ): void {
      handleClickUtil(evt);
    } */
    return (jsxRuntime.jsx(React__namespace.Fragment, { children: jsxRuntime.jsx("input", { "aria-label": "fui-hidden-input", style: { display: "none" }, ref: inputRef, onChange: onChange, type: "file", accept: accept, multiple: multiple }) }));
};

var defaultDrozoneProps = {
    clickable: true,
    behaviour: "add",
    disabled: false,
    dropOnLayer: true,
    uploadConfig: {},
    withCredentials: false,
    actionButtons: {},
    header: true,
    footer: true,
    value: [],
    //borderRadius: "8px"
};
var DEFAULT_BORDER_RADIUS = "8px";
/*
export interface AdvancedConfigItem {
  style?: React.CSSProperties;
  className?: string;
}

export type DropzoneAdvancedConfig = {
  dropzoneLayer: any;
  dropzoneContainer: any;
  dropzoneLabel: any;
}
 */

___$insertStyle(".files-ui-dropzone-children-container {\n  width: 100%;\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 5px 0;\n}");

var DropzoneChildren = function (props) {
    var children = props.children, label = props.label, localization = props.localization;
    var isEmptyArray = Array.isArray(children) && children.length === 0;
    //console.log("isEmptyArray", isEmptyArray,children);
    var DropzoneLocalizer = DropzoneLocalizerSelector(localization);
    //children will be always consider as more important
    if (children && !isEmptyArray) {
        return (jsxRuntime.jsx("div", __assign$1({ className: "files-ui-dropzone-children-container" }, { children: children })));
    }
    else
        return (jsxRuntime.jsx("div", __assign$1({ className: "files-ui-dropzone-children-container" }, { children: jsxRuntime.jsxs("label", { children: [" ", label || DropzoneLocalizer.defaultLabel] }) })));
};

/**
 * Performs stopPropagation and preventDefault functions on an drop event instance
 * @param evt drag event handler object
 */
var handleDropUtil = function (evt) {
    evt.stopPropagation();
    evt.preventDefault();
};
/**
 * Performs stopPropagation and preventDefault functions on an drop event instance
 * and also specifies that the drop effect is link
 * @param evt drag event handler object
 */
var handleDragUtil = function (evt) {
    evt.dataTransfer.dropEffect = "link";
    handleDropUtil(evt);
};

/**
 * Performs stopPropagation and preventDefault functions on an click event instance
 * @param evt click event handler object
 */
function handleClickUtil(evt) {
    evt.preventDefault();
    evt.stopPropagation();
}
/**
 * Click programatically an input element.
 * If the input element is null, nothing will happend
 * @param input the input element target to make a click
 */
var handleClickInput = function (input) {
    if (!input)
        return;
    input.click();
};

var asureRippleColor = function (color) {
    return completeAsureColor(color, 0.4);
};
function createFuiRippleFromDiv(fuiContainerAbs, fuiContainerRel, color) {
    if (!fuiContainerRel || !fuiContainerAbs)
        return;
    fuiContainerAbs.style.display = "block";
    //removeRippleIfExist(fuiContainerRel, "dui-ripple");
    // creating the span circle ripple
    var circle = document.createElement("span");
    //for searching
    circle.id = "filesui-ripple";
    //for styles
    circle.className = "ripple";
    // calculates the diameter
    var diameter = Math.max(fuiContainerRel.clientWidth, fuiContainerRel.clientHeight);
    //const rippleCircleRadius: number = diameter / 2;
    //console.log("w,h", fuiContainerRel.clientWidth, fuiContainerRel.clientHeight);
    circle.style.width = circle.style.height = "".concat(diameter, "px");
    circle.style.backgroundColor = asureRippleColor(color);
    fuiContainerRel.appendChild(circle);
    //remove trash
    setTimeout(function () {
        fuiContainerAbs.style.display = "none";
        circle === null || circle === void 0 ? void 0 : circle.remove();
    }, 501);
}
function createRippleButton(event, variant, color) {
    var buttonAnchorDiv = event.currentTarget;
    var circle = document.createElement("span");
    var diameter = Math.max(buttonAnchorDiv.clientWidth, buttonAnchorDiv.clientHeight);
    //const radius = diameter / 2;
    circle.style.width = circle.style.height = "".concat(diameter, "px");
    /* circle.style.left = `${event.clientX - radius
     }px`;
   circle.style.top = `${event.clientY - radius
     }px`; */
    circle.classList.add("ripple");
    if (variant !== "contained") {
        circle.style.backgroundColor = asureRippleColor(color);
    }
    else {
        circle.style.backgroundColor = hexColorToRGB("#ffffff", 0.4);
    }
    buttonAnchorDiv.appendChild(circle);
    setTimeout(function () {
        circle === null || circle === void 0 ? void 0 : circle.remove();
    }, 501);
}

___$insertStyle(".filesui-disabled-root {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.38);\n}");

var DropzoneDisabledLayer = function (props) {
    var open = props.open, className = props.className, style = props.style;
    function handleClick(evt) {
        handleClickUtil(evt);
    }
    var handleDrag = function (evt) {
        handleDragUtil(evt);
    };
    var handleDrop = function (evt) { return __awaiter$1(void 0, void 0, void 0, function () {
        return __generator$1(this, function (_a) {
            handleDropUtil(evt);
            return [2 /*return*/];
        });
    }); };
    var finalDisabledLayerClassName = addClassName("filesui-disabled-root", className);
    if (open) {
        return (jsxRuntime.jsx("div", { style: style, className: finalDisabledLayerClassName, onDrop: handleDrop, onDragOver: handleDrag, onClick: handleClick }));
    }
    else {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
};

___$insertStyle("@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);\n.fui-dropzone-root {\n  width: 100%;\n  min-width: 150px;\n  min-height: 180px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0 8px;\n  text-rendering: optimizeLegibility;\n  font-size: 1.5em;\n  font-family: \"Poppins\", sans-serif;\n  text-align: center;\n  font-weight: 400;\n  letter-spacing: 0.02857em;\n  box-sizing: border-box;\n  word-break: normal;\n  /*  &.fui-dropzone-border {\n    box-sizing: border-box;\n\n    border: 1px dashed #0c2358;\n    border-radius: 10px;\n    &.fui-hide-border {\n      border: none;\n    }\n  } */\n}\n@media (max-width: 600px) {\n  .fui-dropzone-root {\n    font-size: 1.3em;\n  }\n}\n.fui-dropzone-root.clickable {\n  cursor: pointer;\n}\n\n.files-ui-header {\n  min-height: 23px;\n  /*  height: 22px;\n  position: absolute; \n  top: 0;\n  */\n  cursor: text;\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  font-family: inherit;\n  font-size: 1rem;\n}\n@media (max-width: 960px) {\n  .files-ui-header {\n    font-size: 0.8rem;\n  }\n}\n\n.files-ui-footer {\n  /*   border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px; */\n  box-sizing: border-box;\n  cursor: text;\n  /* height: 23px;\n  position: absolute;\n  bottom: 0;\n  left: 0; */\n  width: 100%;\n  /* display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center; */\n  font-family: inherit;\n  padding-left: 10px;\n  font-size: 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1; /* number of lines to show */\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n  text-align: left;\n}\n@media (max-width: 960px) {\n  .files-ui-footer {\n    padding-left: 1px;\n    font-size: 0.9rem;\n  }\n}");

___$insertStyle(".filesui-base-ripple-absolute {\n  position: absolute;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.filesui-base-ripple-absolute .filesui-base-ripple-relative {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n}\n.filesui-base-ripple-absolute .filesui-base-ripple-relative span.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 500ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n@keyframes ripple {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}");

/**
 * Added support for literals % and px
 * @param sizeStr
 * @returns
 */
var parseSize = function (sizeStr) {
    if (typeof sizeStr === "number") {
        return sizeStr;
    }
    switch (sizeStr) {
        case "micro":
            return 8;
        case "small":
            return 15;
        case "semi-medium":
            return 18;
        case "medium":
            return 25;
        case "large":
            return 28;
        case "extra-large":
            return 32;
        default:
            return 24;
    }
};

var Cancel = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ style: onClick ? __assign$1({}, __assign$1({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function (e) {
            handleClickUtil(e);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        }, xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color ? color : "#000000", className: className || "" }, { children: [jsxRuntime.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none", opacity: ".87" }), jsxRuntime.jsx("path", { d: "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z", fill: colorFill ? colorFill : "none", opacity: ".5" }), jsxRuntime.jsx("path", { d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z" })] })));
};

var CheckCircle = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({}, __assign$1({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color ? color : "#000000" }, { children: [jsxRuntime.jsx("path", { d: "M0 0h24v24H0z", fill: colorFill ? colorFill : "none" }), jsxRuntime.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })] })));
};

var Clean = function (props) {
    var size = props.size, color = props.color, 
    //colorFill,
    onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({}, __assign$1({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", enableBackground: "new 0 0 24 24", height: finalSize ? "".concat(finalSize, "px") : "24px", viewBox: "0 0 24 24", width: finalSize ? "".concat(finalSize, "px") : "24px", fill: color ? color : "#000000" }, { children: [jsxRuntime.jsx("g", { children: jsxRuntime.jsx("rect", { fill: "none", height: finalSize || "24", width: finalSize || "24" }) }), jsxRuntime.jsx("g", { children: jsxRuntime.jsx("g", { children: jsxRuntime.jsx("path", { d: "M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M11,3h2v8h-2V3 z M19,21h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5 v-5c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z" }) }) })] })));
};

var Clear = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({ cursor: "pointer" }, finalStyle) : finalStyle, xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color ? color : "#000000", onClick: function (e) {
            handleClickUtil(e);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        } }, { children: [jsxRuntime.jsx("path", { d: "M0 0h24v24H0V0z", fill: colorFill || "none" }), jsxRuntime.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" })] })));
};

var CloudDone = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({ cursor: "pointer" }, finalStyle) : finalStyle, enableBackground: "new 0 0 24 24", xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color || "#000000", onClick: function (e) {
            handleClickUtil(e);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        } }, { children: [jsxRuntime.jsx("path", { d: "M0 0h24v24H0V0z", fill: colorFill || "none" }), jsxRuntime.jsx("path", { d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z" })] })));
};

var DoDisturb = function (props) {
    var size = props.size, color = props.color, 
    //colorFill,
    onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({}, __assign$1({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", height: finalSize ? "".concat(finalSize, "px") : "24px", viewBox: "0 0 24 24", width: finalSize ? "".concat(finalSize, "px") : "24px", fill: color ? color : "#000000" }, { children: [jsxRuntime.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }), jsxRuntime.jsx("path", { d: "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z", opacity: ".4" }), jsxRuntime.jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z" })] })));
};

var DownloadFile = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({ cursor: "pointer" }, finalStyle) : finalStyle, enableBackground: "new 0 0 24 24", xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color || "#000000", onClick: function (e) {
            handleClickUtil(e);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        } }, { children: [jsxRuntime.jsx("g", { children: jsxRuntime.jsx("rect", { fill: colorFill || "none", height: finalSize, width: finalSize }) }), jsxRuntime.jsx("g", { children: jsxRuntime.jsx("path", { d: "M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" }) })] })));
};

var InfoDisney = function (props) {
    var size = props.size, color = props.color, 
    //colorFill,
    onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size) - 2;
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsx("svg", __assign$1({ 
        //alt=""
        className: className || "", style: onClick ? __assign$1({ cursor: "pointer" }, finalStyle) : finalStyle, "aria-hidden": "true", "aria-label": "info", fill: color || "#000000", role: "img", transform: "", version: "1.1", viewBox: "0 0 36 36", xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), width: "".concat(finalSize, "px"), onClick: function (e) {
            handleClickUtil(e);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        } }, { children: jsxRuntime.jsx("path", { d: "M22.378 0c2.412 0 3.618 1.642 3.618 3.523 0 2.349-2.095 4.522-4.822 4.522-2.284 0-3.616-1.35-3.553-3.582 0-1.877 1.586-4.462 4.757-4.462zM14.956 36c-1.904 0-3.299-1.174-1.967-6.343l2.185-9.166c0.38-1.465 0.443-2.054 0-2.054-0.571 0-3.040 1.012-4.504 2.011l-0.95-1.584c4.63-3.935 9.956-6.241 12.242-6.241 1.903 0 2.219 2.291 1.269 5.814l-2.504 9.634c-0.443 1.701-0.254 2.288 0.191 2.288 0.571 0 2.443-0.706 4.282-2.173l1.080 1.465c-4.504 4.585-9.423 6.349-11.324 6.349z" }) })));
};

var PlayIcon = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({ cursor: "pointer" }, finalStyle) : finalStyle, xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color ? color : "#000000", onClick: function (e) {
            handleClickUtil(e);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        } }, { children: [jsxRuntime.jsx("path", { d: "M0 0h24v24H0V0z", opacity: ".9", fill: colorFill ? colorFill : "none" }), jsxRuntime.jsx("path", { d: "M8 5v14l11-7L8 5z" })] })));
};

var Upload = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ style: onClick ? __assign$1({}, __assign$1({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", enableBackground: "new 0 0 24 24", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color ? color : "#000000", className: className || "" }, { children: [jsxRuntime.jsx("g", { children: jsxRuntime.jsx("rect", { fill: colorFill || "none", height: size || "24", width: size || "24" }) }), jsxRuntime.jsx("g", { children: jsxRuntime.jsx("path", { d: "M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" }) })] })));
};

var UploadError = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({}, __assign$1({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color ? color : "#000000" }, { children: [jsxRuntime.jsx("rect", { fill: colorFill ? colorFill : "none", height: finalSize, width: finalSize }), jsxRuntime.jsx("path", { d: "M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z" })] })));
};

___$insertStyle("@keyframes filesui-rotate-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.filesui-rotate {\n  cursor: default;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .filesui-rotate {\n    animation: filesui-rotate-spin infinite 2s linear;\n  }\n}");

var UploadingProcess = function (props) {
    var size = props.size, color = props.color, 
    //colorFill,
    onClick = props.onClick, style = props.style, className = props.className, spin = props.spin;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    var finalClassname = className || "";
    finalClassname += spin ? "filesui-rotate" : "";
    return (jsxRuntime.jsxs("svg", __assign$1({ className: finalClassname, style: onClick ? __assign$1({}, __assign$1({ cursor: "pointer" }, finalStyle)) : finalStyle, onClick: function () { return onClick === null || onClick === void 0 ? void 0 : onClick(); }, xmlns: "http://www.w3.org/2000/svg", height: finalSize ? "".concat(finalSize, "px") : "24px", viewBox: "0 0 24 24", width: finalSize ? "".concat(finalSize, "px") : "24px", fill: color ? color : "#000000" }, { children: [jsxRuntime.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }), jsxRuntime.jsx("path", { d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" })] })));
};

var Visibility = function (props) {
    var size = props.size, color = props.color, colorFill = props.colorFill, onClick = props.onClick, style = props.style, className = props.className;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsxs("svg", __assign$1({ className: className || "", style: onClick ? __assign$1({ cursor: "pointer" }, finalStyle) : finalStyle, xmlns: "http://www.w3.org/2000/svg", height: "".concat(finalSize, "px"), viewBox: "0 0 24 24", width: "".concat(finalSize, "px"), fill: color ? color : "#000000", onClick: function (e) {
            handleClickUtil(e);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        } }, { children: [jsxRuntime.jsx("path", { d: "M0 0h24v24H0V0z", fill: "none" }), jsxRuntime.jsx("path", { d: "M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z", 
                //opacity=".9"
                fill: colorFill ? colorFill : "none" }), jsxRuntime.jsx("path", { d: "M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })] })));
};

var DropzoneHeader = function (props) {
    var maxFileSize = props.maxFileSize, numberOfValidFiles = props.numberOfValidFiles, onReset = props.onReset, onClean = props.onClean, maxFiles = props.maxFiles, onUploadStart = props.onUploadStart, isUploading = props.isUploading, urlPresent = props.urlPresent, localization = props.localization, borderRadius = props.borderRadius, style = props.style, _a = props.className, className = _a === void 0 ? "" : _a, resetStyles = props.resetStyles, color = props.color, _b = props.firstClassName, firstClassName = _b === void 0 ? "" : _b;
    var DropzoneHeaderLocalizer = DropzoneLocalizerSelector(localization).header;
    var handleClean = function () {
        onClean === null || onClean === void 0 ? void 0 : onClean();
    };
    var handleStartUploading = function () {
        onUploadStart === null || onUploadStart === void 0 ? void 0 : onUploadStart();
    };
    var makeHeader = function () {
        var result = [];
        if (onUploadStart && urlPresent && numberOfValidFiles) {
            if (isUploading) {
                result.push(jsxRuntime.jsx(UploadingProcess, { spin: true, color: color }));
            }
            else {
                result.push(jsxRuntime.jsxs(React__namespace.Fragment, { children: [jsxRuntime.jsx(jsxRuntime.Fragment, { children: DropzoneHeaderLocalizer.uploadFilesMessage }), jsxRuntime.jsx(Upload, { color: color, onClick: handleStartUploading })] }));
            }
            result.push(jsxRuntime.jsxs(React__namespace.Fragment, { children: [",", "\u00A0"] }));
        }
        var maxFileSizeMessenger = DropzoneHeaderLocalizer.maxSizeMessage;
        var maxFileSizeFormatted = fileSizeFormater(maxFileSize);
        if (maxFileSizeFormatted) {
            result.push(maxFileSizeMessenger(maxFileSizeFormatted));
            result.push(jsxRuntime.jsxs(React__namespace.Fragment, { children: [",", "\u00A0"] }));
        }
        var validFileSizeMessenger = DropzoneHeaderLocalizer.validFilesMessage;
        if (maxFiles) {
            result.push(validFileSizeMessenger(numberOfValidFiles, maxFiles));
            result.push(jsxRuntime.jsxs(React__namespace.Fragment, { children: [",", "\u00A0"] }));
        }
        //clean not valid files on click
        if (onClean) {
            result.push(jsxRuntime.jsx(Clean, { color: color, onClick: handleClean, size: "semi-medium" }));
        }
        if (onReset) {
            result.push(jsxRuntime.jsx(Cancel, { color: color, onClick: function () { return onReset === null || onReset === void 0 ? void 0 : onReset(); } }));
        }
        return result;
    };
    function handleClick(evt) {
        evt.stopPropagation();
    }
    var finalClassName = resetStyles
        ? className
        : addClassName("files-ui-header" + " " + firstClassName, className);
    var finalStyle = resetStyles
        ? style
        : __assign$1(__assign$1({}, style), { borderTopLeftRadius: borderRadius, borderTopRightRadius: borderRadius });
    //console.log("headerx resetStyles", resetStyles);
    //console.log("headerx style", style);
    //console.log("headerx finalStyle", finalStyle);
    return (jsxRuntime.jsx("div", __assign$1({ className: finalClassName, onClick: handleClick, style: finalStyle }, { children: makeHeader().map(function (HeaderItem, index) { return (jsxRuntime.jsx("span", __assign$1({ style: { display: "flex" } }, { children: HeaderItem }), index)); }) })));
};

var DropzoneFooter = function (props) {
    var accept = props.accept, message = props.message, localization = props.localization, borderRadius = props.borderRadius, style = props.style, _a = props.className, className = _a === void 0 ? "" : _a, _b = props.resetStyles, resetStyles = _b === void 0 ? false : _b, _c = props.allowedTypesLabel, allowedTypesLabel = _c === void 0 ? true : _c, _d = props.customMessage, customMessage = _d === void 0 ? undefined : _d, _e = props.firstClassName, firstClassName = _e === void 0 ? "" : _e;
    var DropzoneFooterLocalizer = DropzoneLocalizerSelector(localization).footer;
    var accepCustomMessenger = DropzoneFooterLocalizer.acceptCustom;
    function handleClick(evt) {
        handleClickUtil(evt);
    }
    var finalClassName = resetStyles
        ? className
        : addClassName("files-ui-footer ".concat(firstClassName), className);
    var finalStyle = resetStyles
        ? style
        : __assign$1(__assign$1({}, style), { borderBotomLeftRadius: borderRadius, borderBotomRightRadius: borderRadius });
    //console.log("files-ui-footer", finalStyle);
    return (jsxRuntime.jsx("div", __assign$1({ className: finalClassName, onClick: handleClick, style: finalStyle }, { children: customMessage ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: customMessage })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: message
                ? message
                : !accept
                    ? allowedTypesLabel
                        ? DropzoneFooterLocalizer.acceptAll
                        : undefined
                    : accepCustomMessenger(accept) })) })));
};

var DynamiCSS;
(function (DynamiCSS) {
    /**
     * Inserts a stylesheet into the DOM.
     * When an error occurs returns an empty string
     * @param dynamicSheet a dyncamic sheet
     * @return the id of the stylesheet in string format
     */
    function insertStyleSheet(dynamicSheet) {
        var result_id = "";
        if (typeof window === "undefined") {
            return "";
        }
        if (typeof dynamicSheet === "undefined" || dynamicSheet === null) {
            return "";
        }
        //if already exists
        if (document.getElementById(dynamicSheet.id)) {
            return dynamicSheet.id;
        }
        result_id = dynamicSheet.id;
        var styleSheet = document.createElement("style");
        styleSheet.id = result_id;
        styleSheet.setAttribute("type", "text/css");
        var contetRaw = toRawStyleSheet(dynamicSheet.sheetRules || []) + dynamicSheet.raw || "";
        styleSheet.textContent = contetRaw;
        var appendResult = document.head.appendChild(styleSheet);
        if (!appendResult) {
            return "";
        }
        return result_id;
    }
    DynamiCSS.insertStyleSheet = insertStyleSheet;
    /**
     *
     * @param id the id of he style sheet
     * @param sheetRules the set of rules
     * @returns an empty string or the id
     */
    function editStyleSheet(id, sheetRules) {
        var result_id = "";
        if (typeof window === "undefined") {
            return "";
        }
        if (typeof id === "undefined" || id === null || sheetRules === null) {
            return "";
        }
        //if dont exists yet
        var styleSheet = document.getElementById(id);
        if (!styleSheet) {
            return "";
        }
        /*  result_id = id;
         //var styleSheet: HTMLStyleElement = document.createElement("style");
         styleSheet.id = result_id;
         styleSheet.setAttribute("type", "text/css"); */
        styleSheet.textContent = toRawStyleSheet(sheetRules);
        return result_id;
    }
    DynamiCSS.editStyleSheet = editStyleSheet;
    /**
     * Given an id in string format, checks into the DOM whether there is a style
     * with the given id. If true, this function will remove the stylesheet and return the id.
     * If not present, will return an empty string
     * @param id the id of the stylesheet to remove if exists
     * @returns the id or an empty string
     */
    function removeStyleSheet(id) {
        var result_id = "";
        if (!id) {
            return "";
        }
        var htmlObject = document.getElementById(id);
        if (htmlObject) {
            document.head.removeChild(htmlObject);
            result_id = id;
        }
        return result_id;
    }
    DynamiCSS.removeStyleSheet = removeStyleSheet;
    /**
     * Given an id in string format, checks into the DOM whether there is a style
     * with the given id exists and returna boolean result
     * @param id the id of the stylesheet to check if exists
     * @returns true if the stylesheet was found
     */
    function existStyleSheet(id) {
        if (typeof id === "undefined" || id === null) {
            return false;
        }
        var htmlObject = document.getElementById(id);
        if (htmlObject) {
            return true;
        }
        return false;
    }
    DynamiCSS.existStyleSheet = existStyleSheet;
    /**
     * Creates a stylesheet given a stylesheet
     * @param styleSheet astylesheet
     * @returns the new stylesheet object
     */
    function makeStyleSheet(styleSheet) {
        if (typeof styleSheet === "undefined" || styleSheet === null) {
            return null;
        }
        return styleSheet;
    }
    DynamiCSS.makeStyleSheet = makeStyleSheet;
})(DynamiCSS || (DynamiCSS = {}));
/**
 * Determines whether a character is upperCase or not
 * @param character a character
 * @returns true if str contains a string character
 */
function isUpper(character) {
    if (!character)
        return false;
    return !/[a-z]/.test(character) && /[A-Z]/.test(character);
}
/**
 * Converts a rule with uppercase to a hyphen-lowercase version
 * @param ruleLabel the rule
 * @returns a hyphen-lowercase label
 */
function fromUpperCaseToHyphen(ruleLabel) {
    var result = "";
    var charUpper = ' ';
    var isupper = false;
    for (var i = 0; i < ruleLabel.length; i++) {
        var currentChar = ruleLabel[i];
        if (isUpper(currentChar)) {
            charUpper = currentChar;
            isupper = true;
            break;
        }
    }
    //add hyphen
    if (isupper) {
        var parts = ruleLabel.split(charUpper);
        result = "".concat(parts[0], "-").concat(charUpper.toLowerCase()).concat(parts[1]);
    }
    else {
        result = ruleLabel;
    }
    return result;
}
/**
 * Checks if the label contains the ":" character
 * @param ruleLabel the rule
 * @returns true if the rule label corresponds to a pseudo class
 */
function isPseudo(ruleLabel) {
    if (!ruleLabel)
        return false;
    return ruleLabel.includes(":");
}
/**
 *
 * @param className
 * @returns
 */
function makeRawRuleLabel(className) {
    var result = "";
    var splitedClassName = className.trim().split(" ");
    //is composed classname?
    if (splitedClassName.length > 1) {
        for (var i = 0; i < splitedClassName.length; i++) {
            result += ".".concat(splitedClassName[i]);
        }
        result += "{\n";
    }
    else {
        result += ".".concat(className, "{\n");
    }
    return result;
}
/**
 *
 * @param sheetRules
 * @returns
 */
function toRawStyleSheet(sheetRules) {
    if (typeof sheetRules === "undefined" || sheetRules === null) {
        return "";
    }
    var rawStyleSheet = "";
    var nestedPseudos = [];
    for (var j = 0; j < sheetRules.length; j++) {
        var currentRule = sheetRules[j];
        var currnetRawRule = "";
        // currnetRawRule += `.${currentRule.className}{\n`;
        currnetRawRule += makeRawRuleLabel(currentRule.className);
        //list of labels for rules
        var ruleskeys = Object.keys(currentRule.rules);
        for (var i = 0; i < ruleskeys.length; i++) {
            var currentKey = ruleskeys[i];
            var styleLabel = fromUpperCaseToHyphen(currentKey);
            //if a pseudo class found, separate it
            if (isPseudo(styleLabel)) {
                var pseudoClassName = currentRule.className + styleLabel;
                nestedPseudos.push({ className: pseudoClassName, rules: currentRule.rules[styleLabel] });
            }
            else {
                var styleRule = currentRule.rules[currentKey];
                currnetRawRule += "\t".concat(styleLabel, " : ").concat(styleRule, ";\n");
            }
        }
        currnetRawRule += "}\n";
        rawStyleSheet += currnetRawRule;
    }
    //nested pseudos
    for (var p = 0; p < nestedPseudos.length; p++) {
        var currnetRawRule = "";
        var currentRule = nestedPseudos[p];
        var ruleskeys = Object.keys(currentRule.rules);
        currnetRawRule += ".".concat(currentRule.className, "{\n");
        for (var i = 0; i < ruleskeys.length; i++) {
            var currentKey = ruleskeys[i];
            var styleLabel = fromUpperCaseToHyphen(currentKey);
            var styleRule = currentRule.rules[currentKey];
            currnetRawRule += "\t".concat(styleLabel, " : ").concat(styleRule, ";\n");
        }
        currnetRawRule += "}\n";
        rawStyleSheet += currnetRawRule;
    }
    return rawStyleSheet;
}

var MaterialButtonStyleManager = /** @class */ (function () {
    function MaterialButtonStyleManager() {
    }
    /**
     * Increases the count and retrieves the next number
     * @returns the next static number in styles
     */
    MaterialButtonStyleManager.getNextId = function () {
        MaterialButtonStyleManager.nextButtonClassNameNumber++;
        //console.log("Id called " + MaterialButtonStyleManager.nextButtonClassNameNumber);
        return MaterialButtonStyleManager.nextButtonClassNameNumber;
    };
    MaterialButtonStyleManager.nextButtonClassNameNumber = 0;
    /**
     *
     * @param idClassName identifyer
     * @param variant the variant of the button
     * @param disabled disabled prop
     * @param color the theme color
     * @param textColor the text color
     * @returns a DynamicSheet
     */
    MaterialButtonStyleManager.makeDynamicStyle = function (idClassName, variant, disabled, color, textColor, textDecoration) {
        //([{ variant, disabled, color, textColor, nextClassName }]);
        var styleSheet = {
            id: "material-button-styles-".concat(idClassName),
            // id: `dui-button-styles`,
            sheetRules: [
                {
                    className: "material-button.".concat(variant, "-").concat(idClassName),
                    //className: `dui-button.${variant}`,
                    rules: {},
                },
                {
                    className: "material-button-root.".concat(variant, "-").concat(idClassName),
                    // className: `dui-button-root.${variant}`,
                    rules: {},
                }
            ],
        };
        var sheetRules = styleSheet.sheetRules;
        if (!disabled) {
            switch (variant) {
                case "contained":
                    sheetRules[0].rules = {
                        color: asureColor(colourNameToHex(textColor)),
                        backgroundColor: completeAsureColor(color),
                        textDecoration: textDecoration
                    };
                    sheetRules[1].rules = {
                        ":hover": {
                            backgroundColor: darkerColor(completeAsureColor(color)),
                        },
                    };
                    break;
                case "outlined":
                    sheetRules[0].rules = {
                        border: "1px solid ".concat(completeAsureColor(color, 0.5)),
                        color: completeAsureColor(color),
                        backgroundColor: "transparent",
                        textDecoration: textDecoration
                    };
                    sheetRules[1].rules = {
                        ":hover": {
                            border: "1px solid ".concat(completeAsureColor(color, 1)),
                            backgroundColor: completeAsureColor(color, 0.085),
                        },
                    };
                    break;
                case "text":
                    sheetRules[0].rules = {
                        color: completeAsureColor(color),
                        backgroundColor: "transparent",
                        textDecoration: textDecoration
                    };
                    sheetRules[1].rules = {
                        ":hover": {
                            backgroundColor: completeAsureColor(color, 0.085),
                        },
                    };
                    break;
            }
        }
        styleSheet.sheetRules = sheetRules;
        return styleSheet;
    };
    return MaterialButtonStyleManager;
}());

var useMaterialButtonClassName = function (variant, disabled, color, textColor, textDecoration, className, idClassName, resetStyles) {
    //console.log("useMaterialButtonClassName", variant, disabled, color, textColor,
    // textDecoration, className, idClassName, resetStyles);
    var baseClassName = "material-button-root material-button";
    var _a = React__namespace.useState(""), idStyles = _a[0], setIdStyles = _a[1];
    var _b = React__namespace.useState(false), styleInjected = _b[0], setStyleInjected = _b[1];
    var _c = React__namespace.useState(undefined), finalClassName = _c[0], setFinalClassName = _c[1];
    //const [nextClassName, setNextClassName] = React.useState<number>(0);
    var handleInserStyle = function (idClassName, variant, disabled, color, textDecoration, textColor) {
        var finalClassName = baseClassName;
        var styleSheet = MaterialButtonStyleManager.makeDynamicStyle(idClassName, variant, disabled, color, textColor, textDecoration);
        var idStyle = "";
        if (!styleInjected) {
            idStyle = DynamiCSS.insertStyleSheet(styleSheet);
            //console.log("DynamiCSS insert", idStyle);
            setIdStyles(idStyle);
            if (idStyle !== "")
                setStyleInjected(true);
        }
        else {
            //already a stylesheet associated
            DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
            //console.log("DynamiCSS edit", idStyle);
        }
        //let finalClassName = `material-button-root material-button `;
        if (!disabled) {
            //finalClassName += `${variant} ${variant}-${nextClassName}`;
            finalClassName += " ".concat(variant, " ").concat(variant, "-").concat(idClassName);
        }
        else {
            finalClassName += " disabled";
        }
        //classname to override styles in stylesheet
        if (className && className.length > 0) {
            finalClassName += " ".concat(className);
        }
        //some text in className
        if (textDecoration) {
            var finalTextDecoration = textDecoration &&
                ["uppercase", "capitalize", "lowercase", "none"].includes(textDecoration === null || textDecoration === void 0 ? void 0 : textDecoration.toLowerCase()) ? textDecoration.toLowerCase() : "uppercase";
            finalClassName += " ".concat(finalTextDecoration);
        }
        setFinalClassName(finalClassName);
    };
    React__namespace.useEffect(function () {
        if (!resetStyles)
            handleInserStyle(idClassName, variant, disabled, color, textDecoration, textColor);
        // eslint-disable-next-line
    }, [variant, disabled, color, textDecoration, textColor, className, idClassName, resetStyles]);
    var removeStyle = function (styleInjected, idStyles) {
        ////console.log("DynamiCSS removing", styleInjected, idStyles);
        if (styleInjected) {
            /* const res =  */ DynamiCSS.removeStyleSheet(idStyles);
            ////console.log("DynamiCSS removing res", res);
            setStyleInjected(false);
            setIdStyles("");
        }
    };
    React__namespace.useEffect(function () {
        return function () { return removeStyle(styleInjected, idStyles); };
        // eslint-disable-next-line
    }, [styleInjected, idStyles]);
    return finalClassName;
};

___$insertStyle("@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);\n.material-button-root {\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  vertical-align: middle;\n  justify-content: center;\n  text-decoration: none;\n  text-transform: none;\n  color: white;\n}\n\n.material-button {\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  overflow: hidden;\n  min-width: 64px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.75;\n  letter-spacing: 0.02857em;\n}\n\n.material-button.uppercase {\n  text-transform: uppercase;\n}\n\n.material-button.lowercase {\n  text-transform: lowercase;\n}\n\n.material-button.capitalize {\n  text-transform: capitalize;\n}\n\n.material-button.contained {\n  padding: 6px 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.material-button.outlined {\n  padding: 5px 15px;\n}\n\n.material-button.text {\n  padding: 5px 15px;\n}\n\n.material-button-root.contained:hover {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n.material-button span.material-button-label {\n  width: 100%;\n  display: inherit;\n  align-items: inherit;\n  justify-content: inherit;\n}\n\nspan.ripple {\n  position: absolute;\n  border-radius: 50%;\n  transform: scale(0);\n  animation: ripple 500ms linear;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n\n@keyframes ripple {\n  to {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n.material-button-root.disabled {\n  box-shadow: none;\n  cursor: default;\n  pointer-events: none;\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.26);\n  padding: 6px 16px;\n}\n.material-button-root.disabled.darkmode {\n  background-color: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.3);\n}\n\n/* @media screen and (max-width: 600px) {\n  .material-button {\n    min-width: 30px;\n    font-size: 0.78rem;\n    line-height: 1.5;\n    letter-spacing: 0.025em;\n  }\n  .material-button.contained {\n    padding: 4px 13px;\n  }\n  .material-button.outlined {\n    padding: 4px 12px;\n  }\n}\n */");

var FilesUiContext = React__default["default"].createContext({});

var MaterialButton = function (props) {
    var disabled = props.disabled, href = props.href, textDecoration = props.textTransform, _a = props.variant, variant = _a === void 0 ? "contained" : _a, _b = props.color, color = _b === void 0 ? "#1976d2" : _b, _c = props.textColor, textColor = _c === void 0 ? "white" : _c, children = props.children, className = props.className, style = props.style, onClick = props.onClick, resetStyles = props.resetStyles, disableRipple = props.disableRipple, darkModeProp = props.darkMode, id = props.id, rest = __rest(props, ["disabled", "href", "textTransform", "variant", "color", "textColor", "children", "className", "style", "onClick", "resetStyles", "disableRipple", "darkMode", "id"]);
    //context
    var darkModeContext = React__namespace.useContext(FilesUiContext).darkMode;
    var darkMode = darkModeProp !== undefined ? darkModeProp : darkModeContext;
    //  const idClassName = React.useId();
    var idClassName = React__namespace.useMemo(function () { return id || FileIdGenerator.getNextId() + ""; }, [id]);
    var materialButtonClassName = useMaterialButtonClassName(variant, disabled, color, textColor, textDecoration, className, idClassName.replace(":", "").replace(":", ""), resetStyles);
    var finalMBClassNameDarkMode = materialButtonClassName && darkMode
        ? addClassName(materialButtonClassName, "darkmode")
        : materialButtonClassName;
    //console.log("finalMBClassNameDarkMode", finalMBClassNameDarkMode, darkMode);
    function handleClick(e) {
        e.preventDefault();
        //ripple
        if (!disableRipple)
            createRippleButton(e, variant, color);
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    }
    if (finalMBClassNameDarkMode !== undefined || resetStyles)
        return React__namespace.createElement(href ? "a" : "button", __assign$1({ className: resetStyles && className ? className : finalMBClassNameDarkMode, "data-testid": href ? "dui-anchor" : "dui-button", onClick: handleClick, href: href, style: style, children: jsxRuntime.jsx("span", __assign$1({ className: "material-button-label" }, { children: children })), disabled: disabled }, rest));
    else
        return jsxRuntime.jsx(React__namespace.Fragment, { children: "loading styes" });
};

___$insertStyle(".files-ui-buttons-container {\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  gap: 10px;\n}\n.files-ui-buttons-container.top {\n  padding-bottom: 10px;\n}\n.files-ui-buttons-container.bottom {\n  padding-top: 10px;\n}");

var DropzoneButtons = function (props) {
    var cleanButton = props.cleanButton, abortButton = props.abortButton, containerClassName = props.className, containerStyle = props.style, deleteButton = props.deleteButton, uploadButton = props.uploadButton, 
    //localization,
    onAbort = props.onAbort, onClean = props.onClean, onDelete = props.onDelete, onUpload = props.onUpload, top = props.top; props.disabled;
    var actionButtonsList = [
        cleanButton
            ? __assign$1(__assign$1({}, cleanButton), { label: cleanButton.label || "Clean", onClick: cleanButton.onClick || onClean }) : undefined,
        deleteButton
            ? __assign$1(__assign$1({}, deleteButton), { label: deleteButton.label || "Delete", onClick: deleteButton.onClick || onDelete }) : undefined,
        uploadButton
            ? __assign$1(__assign$1({}, uploadButton), { label: uploadButton.label || "Upload", onClick: uploadButton.onClick || onUpload }) : undefined,
        abortButton
            ? __assign$1(__assign$1({}, abortButton), { label: abortButton.label || "Abort", onClick: abortButton.onClick || onAbort }) : undefined,
    ].filter(function (ab) { return ab !== undefined; });
    var tailClassName = "".concat(top ? " top" : " bottom");
    var finalClassName = addClassName("files-ui-buttons-container" + tailClassName, containerClassName);
    return (jsxRuntime.jsx("div", __assign$1({ className: finalClassName, style: containerStyle }, { children: actionButtonsList.map(function (actionButtonProps, index) {
            var disabled = actionButtonProps.disabled, children = actionButtonProps.children, label = actionButtonProps.label, resetStyles = actionButtonProps.resetStyles, className = actionButtonProps.className, style = actionButtonProps.style, onClick = actionButtonProps.onClick;
            return (jsxRuntime.jsx(MaterialButton, __assign$1({ className: className, style: style, resetStyles: resetStyles, onClick: function (evt) { return onClick === null || onClick === void 0 ? void 0 : onClick(evt); }, disabled: disabled }, { children: children || label }), index));
        }) })));
};

var DropLayer = function (props) {
    var onDrop = props.onDrop, onDragLeave = props.onDragLeave, classNameLayer = props.className, open = props.open, style = props.style;
    //console.log("DropLayer", classNameLayer);
    /*  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
       //console.log("Drag ended");
       onDragLeave?.(evt);
     }; */
    return (jsxRuntime.jsx("div", { className: classNameLayer, onDragLeave: onDragLeave, onDrop: onDrop, 
        //onDragEnd={onDragEnd}
        style: style || { display: open ? undefined : "none" } }));
};

function useDropzoneClassName(dropzoneId, className, 
//isDragging: boolean,
//header: boolean | undefined = false,
//footer: boolean | undefined = false,
color, 
//borderRadius: string | number | undefined,
background, minHeight) {
    //console.log("useDropzoneClassName", className, isDragging, header, footer, color, background, minHeight);
    var finalDropzoneId = (color === undefined && background === undefined && minHeight === undefined) ? "default" : dropzoneId.replace(":", "_").replace(":", "_");
    var baseClassName = "fui-dropzone-root fui-dropzone-border";
    var _a = React__namespace.useState(""), idStyles = _a[0], setIdStyles = _a[1];
    var _b = React__namespace.useState(false), styleInjected = _b[0], setStyleInjected = _b[1];
    var _c = React__namespace.useState(undefined), finalClassName = _c[0], setFinalClassName = _c[1];
    var _d = React__namespace.useState(undefined), finalClassNameHeader = _d[0], setFinalClassNameHeader = _d[1];
    var _e = React__namespace.useState(undefined), finalClassNameFooter = _e[0], setFinalClassNameFooter = _e[1];
    var _f = React__namespace.useState(undefined), finalClassNameDisabled = _f[0], setFinalClassNameDisabled = _f[1];
    //const [offset, setOffset] = React.useState<number>(0);
    var makeClassName = function (className, 
    //isDragging: boolean,
    // offset: number,
    color, 
    //borderRadius: string | number | undefined,
    background, minHeight) {
        var finalClassName = baseClassName;
        // better to come back to the custom stylesheet for each dropzone with the unique id
        var styleSheet = makeDynamicDropzoneStyleSheet(finalDropzoneId, 
        // offset,
        //isDragging,
        color, background, minHeight);
        var idStyle = "";
        if (!styleInjected) {
            idStyle = DynamiCSS.insertStyleSheet(styleSheet);
            setIdStyles(idStyle);
            if (idStyle !== "")
                setStyleInjected(true);
        }
        else {
            //already a stylesheet associated
            DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
        }
        finalClassName += " files-ui-dropzone-extra-".concat(finalDropzoneId);
        if (className) {
            finalClassName = "".concat(finalClassName, " ").concat(className);
        }
        /* if (isDragging) {
            finalClassName = `${finalClassName} fui-hide-border`;
        } */
        setFinalClassName(finalClassName);
        setFinalClassNameHeader("files-ui-header-border-rd-".concat(finalDropzoneId));
        setFinalClassNameFooter("files-ui-footer-border-rd-top-bg-color-".concat(finalDropzoneId));
        setFinalClassNameDisabled("files-ui-disabled-layer-color-".concat(finalDropzoneId));
    };
    React__namespace.useEffect(function () {
        makeClassName(className, 
        //isDragging,
        //offset, 
        color, 
        // borderRadius, 
        background, minHeight);
        // eslint-disable-next-line
    }, [className,
        //isDragging,
        // offset, 
        color,
        //borderRadius, 
        background, minHeight]);
    return [finalClassName, finalClassNameHeader, finalClassNameFooter, finalClassNameDisabled];
}
var makeDynamicDropzoneStyleSheet = function (dropzoneId, 
// offset: number,
//isDragging: boolean,
color, background, minHeight) {
    var rootColorBorderStyle = {
        className: "files-ui-dropzone-extra-".concat(dropzoneId),
        rules: {
            color: completeAsureColor(color),
            border: "1px dashed ".concat(completeAsureColor(color)),
            borderRadius: DEFAULT_BORDER_RADIUS,
            background: background,
            minHeight: typeof minHeight === "number" ? "".concat(minHeight, "px") : minHeight,
        },
    };
    var rootColorBorderStyleHideBorder = {
        className: "files-ui-root-border-hide",
        rules: {
            borderColor: "transparent",
        },
    };
    var headerBorderStyle = {
        className: "files-ui-header-border-rd-".concat(dropzoneId),
        rules: {
            "border-top-left-radius": DEFAULT_BORDER_RADIUS,
            "border-top-right-radius": DEFAULT_BORDER_RADIUS,
        },
    };
    var footerBorderStyle = {
        className: "files-ui-footer-border-rd-top-bg-color-".concat(dropzoneId),
        rules: {
            "border-bottom-left-radius": DEFAULT_BORDER_RADIUS,
            "border-bottom-right-radius": DEFAULT_BORDER_RADIUS,
            background: completeAsureColor(color, 0.129),
            borderTop: "1px dotted ".concat(completeAsureColor(color))
        },
    };
    var disabledLayerStyle = {
        className: "files-ui-disabled-layer-color-".concat(dropzoneId),
        rules: {
            borderRadius: DEFAULT_BORDER_RADIUS,
            background: completeAsureColor(color, 0.38),
        }
    };
    var sheetRules = [
        rootColorBorderStyle,
        rootColorBorderStyleHideBorder,
        headerBorderStyle,
        footerBorderStyle,
        disabledLayerStyle
    ];
    return {
        id: "files-dropzone-ui-style-id-" + dropzoneId,
        sheetRules: sheetRules
    };
};

/**
 * Effect for keeping track of changes
 * update files when value changes
 * also updates the number of valid files
 * When `isUploading` is true, it only updates when value and arrOfExtFiles
 * have same lenght. Also, only updates the uploadStatus attribute
 * from "preparing", to undefined when onCancel() method is called in
 * FileItem component
 * @param dropzoneId the asociated dropzoneId for the corresponding array of ExtFiles in case of multiple dropzones
 * @param value the current value of the list of Files from props
 * @param isUploading
 * @returns the local list of Files
 */
var useDropzoneFileListUpdater = function (dropzoneId, value, isUploading, maxFileSize, accept, maxFiles, validator, localization, validateFilesFlag) {
    //console.log("incomming extfiles fileupdater value", value.map(x => x.uploadStatus));
    //console.log("FileListUpdater", dropzoneId, value, isUploading, maxFileSize, accept, maxFiles, validateFilesFlag);
    //state for managing the files locally
    var _a = React__namespace.useState([]), localFiles = _a[0], setLocalFiles = _a[1];
    // the current number of valid files
    var _b = React__namespace.useState(0), numberOfValidFiles = _b[0], setNumberOfValidFiles = _b[1];
    //Detect changes in the file item props when upload started
    //mostly for detecting 
    React__namespace.useEffect(function () {
        var arrOfExtFiles = ExtFileManager.getExtFileInstanceList(dropzoneId);
        //console.log("value changed", isUploading, value.map(F => F.uploadStatus), dropzoneId);
        // //console.log("value changed", value.map(F => F.uploadStatus));
        if (!isUploading) {
            setLocalFiles(value);
        }
        else {
            // when is uploading
            if (arrOfExtFiles) {
                //lenght of the new arr can be equal or lower
                //when lower, it means a file was deleted, it will be removed only if was not uploaded
                //when same lenght it means that a file could be
                //no mather the size, it will search for the missing and the status that changed
                arrOfExtFiles.forEach(function (extFileInstance) {
                    //if the current Ext file is not present anymore
                    //add deleted flag
                    var extFileIndex = value.findIndex(function (extFile) { return extFile.id === extFileInstance.id; });
                    if (extFileIndex === -1) {
                        extFileInstance.extraData = { deleted: true };
                        //console.log("extFileUpdater not found", extFileInstance.id);
                    }
                    else {
                        var currExtFileObj = value[extFileIndex];
                        setNextUploadStatus(extFileInstance, currExtFileObj);
                    }
                });
                /*if (arrOfExtFiles.length !== value.length || value.length === 0) {
                    return;
                }
                for (let i = 0; i < arrOfExtFiles.length; i++) {
                    if (
                        (value[i].uploadStatus === undefined)
                        &&
                        (arrOfExtFiles[i].uploadStatus === "preparing")
                    ) {
                        //console.log("useDropzoneFileListUpdater onCancel i", i);
                        arrOfExtFiles[i].uploadStatus = undefined;
                    }
                } */
            }
        }
        // eslint-disable-next-line
    }, [dropzoneId, value,
        // isUploading
    ]);
    //Detect changes in validation props for re-validating files
    React__namespace.useEffect(function () {
        if (!validateFilesFlag) {
            setLocalFiles(localFiles.map(function (F) { return __assign$1(__assign$1({}, F), { valid: undefined }); }));
            return;
        }
        var localValidator = { maxFileSize: maxFileSize, accept: accept };
        var validatedExtFileList = validateExtFileList(localFiles, maxFiles ? maxFiles - numberOfValidFiles : Infinity, localValidator, validator, maxFiles, localization);
        setLocalFiles(validatedExtFileList);
        //missing dependencie localFiles was not added by purpose
        // eslint-disable-next-line
    }, [validateFilesFlag, maxFileSize, accept, maxFiles, localization]);
    // the current number of valid files
    // update number of valid files
    React__namespace.useEffect(function () {
        if (validateFilesFlag) {
            setNumberOfValidFiles(localFiles.filter(function (x) { return x.valid; }).length);
        }
        else {
            setNumberOfValidFiles(localFiles.length);
        }
    }, [localFiles, validateFilesFlag]);
    return [localFiles, numberOfValidFiles, setLocalFiles];
};

var useFakeProgress = function (time) {
    if (time === void 0) { time = 1500; }
    var _a = React__namespace.useState(28), progress = _a[0], setProgress = _a[1];
    React__namespace.useEffect(function () {
        var updateProgress = function (currProgress) {
            if (currProgress === 100) {
                return 0;
            }
            var offset = getRandomInt(5, 24);
            var newProgress = currProgress + offset;
            if (newProgress > 100) {
                return 100;
            }
            else {
                return newProgress;
            }
        };
        var _myInterval = setInterval(function () {
            setProgress(function (_progress) { return updateProgress(_progress); });
        }, time);
        //console.log("useFakeProgress SET interval", _myInterval);
        return function () {
            //console.log("useFakeProgress CLEAR interval", _myInterval);
            clearInterval(_myInterval);
        };
        // eslint-disable-next-line
    }, []);
    return progress;
};

var makeDropLayerDynamicStyle = function (dropzoneId, color) {
    return {
        id: "files-ui-drop-layer-style-id-" + dropzoneId,
        sheetRules: [
            {
                className: "dropzone-layer-".concat(dropzoneId),
                rules: {
                    backgroundColor: completeAsureColor(color, 0.4),
                    borderRadius: DEFAULT_BORDER_RADIUS,
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "0%",
                    height: "0%",
                    zIndex: 20,
                    border: "0px dashed ".concat(completeAsureColor(color))
                },
            },
            {
                className: "dropzone-layer-drag",
                rules: {
                    width: "100%",
                    height: "100%",
                    borderWidth: "2px"
                },
            }
        ],
    };
};

//const BASE_DROP_LAYER_STYLE: string = "files-ui-styles-drop-layer"; 
/**
 *
 * @param color
 * @param isDragging
 * @param makeClassName whether to make the classname or not
 * @returns the classname for layer
 */
var useDropLayerClassName = function (dropzoneId, color, 
//isDragging?: boolean,
makeClassName) {
    var _a = React__namespace.useState(""), idStyles = _a[0], setIdStyles = _a[1];
    var _b = React__namespace.useState(false), styleInjected = _b[0], setStyleInjected = _b[1];
    var _c = React__namespace.useState(""), classNameCreated = _c[0], setClassNameCreated = _c[1];
    var finalDropzoneId = (color === undefined) ? "default" : dropzoneId.replace(":", "_").replace(":", "_");
    React__namespace.useEffect(function () {
        ////console.log("useDropLayerClassName", color, isDragging, makeClassName);
        var handleInserStyle = function (color) {
            var finalClassName = "";
            var styleSheet = makeDropLayerDynamicStyle(finalDropzoneId, color
            //isDragging
            );
            var idStyle = "";
            //console.log("useDropLayerClassName handleInserStyle", color, styleSheet);
            if (finalDropzoneId === "default" && !styleInjected) {
                //check if already inserted
                if (DynamiCSS.existStyleSheet("files-ui-drop-layer-style-id-" + finalDropzoneId)) {
                    setStyleInjected(true);
                    setIdStyles("files-ui-drop-layer-style-id-" + finalDropzoneId);
                }
                else {
                    idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                    setIdStyles(idStyle);
                    if (idStyle !== "") {
                        setStyleInjected(true);
                    }
                }
            }
            else if (!styleInjected) {
                idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                setIdStyles(idStyle);
                if (idStyle !== "") {
                    setStyleInjected(true);
                }
            }
            else {
                //already a stylesheet associated
                DynamiCSS.editStyleSheet(idStyles, styleSheet.sheetRules || []);
            }
            finalClassName += "dropzone-layer-".concat(finalDropzoneId);
            /*  if (isDragging) {
                 finalClassName += ` dropzone-layer-drag`;
             } */
            setClassNameCreated(finalClassName);
        };
        ////console.log("=>", isDragging);
        if (makeClassName) {
            handleInserStyle(color);
        }
        // eslint-disable-next-line
    }, [color,
        // isDragging,
        makeClassName]);
    return classNameCreated;
};

/**
 * Initializer hook for FileItemNeo
 * @param file The file Object
 * @param valid Whether the file is valid, not valid or not set
 * @param preview Whether to show a preview on FileItem
 * @param imageUrl The image url
 * @param xhr the xhr object
 * @param progress the current progress given by props
 * @returns an array thta contains the following properties [isImage, isVideo, url, imageSource, localProgress]
 */
var useFileMosaicInitializer = function (file, name, type, valid, preview, imageUrl, videoUrl, customIcons, xhr) {
    var _a = React__namespace.useState(false), isImage = _a[0], setIsImage = _a[1];
    var _b = React__namespace.useState(false), isVideo = _b[0], setIsVideo = _b[1];
    var _c = React__namespace.useState(""), url = _c[0], setUrl = _c[1];
    var _d = React__namespace.useState(undefined), imageSource = _d[0], setImageSource = _d[1];
    var _e = React__namespace.useState(undefined), videoSource = _e[0], setVideoSource = _e[1];
    var _f = React__namespace.useState(false), isReady = _f[0], setIsReady = _f[1];
    var init = function (file, name, type, valid, preview, imageUrl, videoUrl, customIcons, xhr, progress) { return __awaiter$1(void 0, void 0, void 0, function () {
        var url, response, response_1;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //////////////////////////////
                    //console.log("init", file, name, type);
                    if (!file && (!name && !type))
                        return [2 /*return*/];
                    url = (file ? getURLFileIco(file, customIcons) :
                        getURLFileIcoFromNameAndType(name, type, customIcons)).url;
                    //console.log("init", url);
                    setUrl(url);
                    if (!(imageUrl && videoUrl)) return [3 /*break*/, 1];
                    setIsVideo(true);
                    setImageSource(imageUrl);
                    setVideoSource(videoUrl);
                    setIsReady(true);
                    return [2 /*return*/];
                case 1:
                    if (!imageUrl) return [3 /*break*/, 2];
                    setIsImage(true);
                    setImageSource(imageUrl);
                    setIsReady(true);
                    return [2 /*return*/];
                case 2:
                    if (!videoUrl) return [3 /*break*/, 3];
                    setIsVideo(true);
                    setVideoSource(videoUrl);
                    setIsReady(true);
                    return [3 /*break*/, 5];
                case 3:
                    response = getHeaderAndTail(file, type);
                    setIsImage(response[0] === "image");
                    if (["mp4", "ogg", "webm"].includes(response[1]))
                        setIsVideo(response[0] === "video");
                    if (!(preview &&
                        (valid || typeof valid === "undefined" || valid === null) &&
                        response[0] === "image")) return [3 /*break*/, 5];
                    response_1 = undefined;
                    if (!file) return [3 /*break*/, 5];
                    return [4 /*yield*/, readAsDataURL(file)];
                case 4:
                    response_1 = _a.sent();
                    if (response_1) {
                        setImageSource(response_1);
                    }
                    _a.label = 5;
                case 5:
                    setIsReady(true);
                    return [2 /*return*/];
            }
        });
    }); };
    //////   CLEAN UP
    React__namespace.useEffect(function () {
        init(file, name, type, valid, preview || false, imageUrl, videoUrl, customIcons);
        return function () {
            setImageSource(undefined);
            setIsImage(false);
            setIsVideo(false);
            setIsReady(false);
        };
        // eslint-disable-next-line
    }, [file, name, type, valid, preview, imageUrl, videoUrl, customIcons]);
    return [isReady, isImage, isVideo, url, imageSource, videoSource];
};
/* export const identifyFileSource = (file: File | undefined, name: string, fileType: string) => {
    if(!file){

    }
} */
var getHeaderAndTail = function (file, type) {
    if (file) {
        if (file.type) {
            var splittedType = file.type.split("/");
            return [splittedType[0], splittedType[1]];
        }
        else {
            return ["octet", "octet"];
        }
    }
    else {
        var splittedType = type === null || type === void 0 ? void 0 : type.split("/");
        if (splittedType && splittedType.length > 1) {
            return [splittedType[0], splittedType[1]];
        }
        else {
            return ["octet", "octet"];
        }
    }
};

var useIsUploading = function (uploadStatus) {
    var _a = React__namespace.useState(false), isUploading = _a[0], setIsUploading = _a[1];
    var _b = React__namespace.useState(uploadStatus), lastUploadStatus = _b[0], setLastUploadStatus = _b[1];
    React__namespace.useEffect(function () {
        setLastUploadStatus(uploadStatus);
        if (["uploading", "preparing"].includes(lastUploadStatus || "") &&
            ["success", "error", "aborted"].includes(uploadStatus || "")) {
            setTimeout(function () {
                setIsUploading(false);
            }, 3500);
            return;
        }
        else {
            //base comparison
            setIsUploading(uploadStatus === "preparing" || uploadStatus === "uploading");
        }
        // eslint-disable-next-line
    }, [uploadStatus]);
    return isUploading;
};

/**
 * @param progress the progress given as a prop to the component
 * @param xhr the XMLHttpRequest object for AJAX operations
 * @returns the progress to be shown in the component
 */
var useProgress = function (progress, xhr) {
    //console.log("getProgress", progress, xhr);
    var _a = React__namespace.useState(undefined), localProgress = _a[0], setLocalProgress = _a[1];
    if (progress !== undefined) {
        if (localProgress !== progress) {
            setLocalProgress(progress);
        }
    }
    else {
        if (xhr !== undefined && xhr !== null && xhr.upload.onprogress === null) {
            // xhr was given but it was not initialized the `onprogress` event
            xhr.upload.onprogress = function (event) {
                //console.log("getProgress progress", progress, (event.loaded / event.total) * 100);
                setLocalProgress((event.loaded / event.total) * 100);
            };
            //initial progress value set to 0
            setLocalProgress(0);
        }
        //return undefined;
    }
    return localProgress;
};

var isThereValidUrl = function (url, urlFunction, extFileList) {
    return ExtFileInstance.someValidUrl(extFileList || []) || urlFunction != undefined || (url != undefined && url.length > 0);
};

//import { print_manager } from "../../../../../utils";
// SKOTE MOD: Global variable to hold the upload function
exports.DropzoneUploadFiles = null;
/**
 *
 * Demos:
 *
 * - [Dropzone](https://www.files-ui.com/components/dropzone)
 *
 * API:
 *
 * - [Dropzone API](https://www.files-ui.com/api/dropzone/)
 */
var Dropzone = function (props) {
    var _a = mergeProps(props, defaultDrozoneProps), 
    //basic
    onChange = _a.onChange, _b = _a.value, value = _b === void 0 ? [] : _b, 
    //validation
    accept = _a.accept, maxFileSize = _a.maxFileSize, maxFiles = _a.maxFiles, validator = _a.validator, cleanFiles = _a.cleanFiles, onClean = _a.onClean, autoClean = _a.autoClean, 
    //uploading
    uploadConfig = _a.uploadConfig, withCredentials = _a.withCredentials, fakeUpload = _a.fakeUpload, groupUpload = _a.groupUpload, onUploadStart = _a.onUploadStart, onUploadFinish = _a.onUploadFinish, 
    //styling
    background = _a.background, color = _a.color, minHeight = _a.minHeight, style = _a.style, 
    //textColor,
    className = _a.className, 
    //label
    label = _a.label, 
    //localization
    locProps = _a.localization, 
    //ripple
    disableRipple = _a.disableRipple, 
    //drag operations
    onDragEnter = _a.onDragEnter, onDragLeave = _a.onDragLeave, 
    //action butotns
    actionButtons = _a.actionButtons, 
    //drop layer
    dropOnLayer = _a.dropOnLayer, 
    //header and footer
    header = _a.header, footer = _a.footer, _c = _a.headerConfig, headerConfig = _c === void 0 ? {} : _c, _d = _a.footerConfig, footerConfig = _d === void 0 ? {} : _d, 
    //disabled
    disabled = _a.disabled, 
    //open file dialog
    clickable = _a.clickable, 
    //add or replace
    behaviour = _a.behaviour, 
    //content
    children = _a.children, 
    //advancedConfig,
    rest = __rest(_a, ["onChange", "value", "accept", "maxFileSize", "maxFiles", "validator", "cleanFiles", "onClean", "autoClean", "uploadConfig", "withCredentials", "fakeUpload", "groupUpload", "onUploadStart", "onUploadFinish", "background", "color", "minHeight", "style", "className", "label", "localization", "disableRipple", "onDragEnter", "onDragLeave", "actionButtons", "dropOnLayer", "header", "footer", "headerConfig", "footerConfig", "disabled", "clickable", "behaviour", "children"]);
    //context
    var 
    // darkMode: darkModeContext,
    //icons,
    locContext = React__namespace.useContext(FilesUiContext).localization;
    var localization = locProps !== undefined ? locProps : locContext;
    var _e = uploadConfig, url = _e.url, method = _e.method, headers = _e.headers, uploadLabel = _e.uploadLabel, _f = _e.cleanOnUpload, cleanOnUpload = _f === void 0 ? true : _f, _g = _e.preparingTime, preparingTime = _g === void 0 ? 1500 : _g, _h = _e.autoUpload, autoUpload = _h === void 0 ? false : _h, urlFromExtFile = _e.urlFromExtFile, _j = _e.asBlob, asBlob = _j === void 0 ? false : _j;
    var _k = actionButtons, actionButtonsPosition = _k.position, abortButton = _k.abortButton, deleteButton = _k.deleteButton, uploadButton = _k.uploadButton, cleanButton = _k.cleanButton, containerStyle = _k.style, containerClassName = _k.className;
    var styleBorderRadius = style === null || style === void 0 ? void 0 : style.borderRadius;
    var _l = headerConfig.cleanFiles, cleanFilesHeader = _l === void 0 ? true : _l, _m = headerConfig.deleteFiles, deleteFilesHeader = _m === void 0 ? true : _m, _o = headerConfig.maxFileSize, maxFileSizeHeader = _o === void 0 ? true : _o, _p = headerConfig.uploadFiles, uploadFilesHeader = _p === void 0 ? true : _p, _q = headerConfig.uploadingIcon, uploadingIconHedaer = _q === void 0 ? true : _q, _r = headerConfig.validFilesCount, validFilesCountHeader = _r === void 0 ? true : _r, customHeader = headerConfig.customHeader, classNameHeader = headerConfig.className, _s = headerConfig.resetStyles, resetStylesHeader = _s === void 0 ? false : _s, styleHeader = headerConfig.style;
    var customFooter = footerConfig.customFooter, _t = footerConfig.noMissingFilesLabel, noMissingFilesLabel = _t === void 0 ? true : _t, _u = footerConfig.uploadProgressMessage, uploadProgressMessage = _u === void 0 ? true : _u, _v = footerConfig.uploadResultMessage, uploadResultMessage = _v === void 0 ? true : _v;
    //console.log("Dropzone props", dropOnLayer);
    //localizers
    var DropzoneLocalizer = DropzoneLocalizerSelector(localization);
    //ref to handle ripple
    var fuiRippleRefAbs = React__namespace.useRef(null);
    var fuiRippleRefRel = React__namespace.useRef(null);
    //ref to the hidden input tag
    var inputRef = React__namespace.useRef(null);
    //state for drag operation
    var _w = React__namespace.useState(false), isDragging = _w[0], setIsDragging = _w[1];
    //state for checking upload start
    var _x = React__namespace.useState(false), isUploading = _x[0], setIsUploading = _x[1];
    //state for message on footer
    var _y = React__namespace.useState(""), localMessage = _y[0], setLocalMessage = _y[1];
    //Id for uploding through FuiFileManager
    //const dropzoneId: string | number = useDropzoneFileListID();
    // const dropzoneId: string | number = React.useId();
    var dropzoneId = React__namespace.useMemo(function () { return FileIdGenerator.getNextId() + ""; }, []);
    //React.useId();
    //Flag that determines whether to validate or not
    var validateFilesFlag = isValidateActive(accept, maxFileSize, maxFiles, validator);
    //state for managing the number of valid files
    //state for managing the files locally
    var _z = useDropzoneFileListUpdater(dropzoneId, value || [], isUploading, maxFileSize, accept, maxFiles, validator, localization, validateFilesFlag), localFiles = _z[0], numberOfValidFiles = _z[1], setLocalFiles = _z[2];
    /**
     * Flag that determines if component should perform upload given url
     */
    var shouldUpload = isThereValidUrl(url, urlFromExtFile, localFiles);
    /**
     * Uploads each file in the array of ExtFiles
     * First, sets all the files in preparing status and awaits `preparingTime` miliseconds.
     * If `preparingTime` is not given or its value is false or 0, there won´t be a preparing phase.
     *        This is only for the first file, the rest of files will have preparing time until the file before was uploaded
     *        The first file will jump from undef to "uploading"
     * Then onChange event will be called to update the files outside.
     *
     * If `onCancel` event ocurrs outside on any on the
     * FileItems(e.g. by clicking the cancel button on `FileItem`),
     * the extFileInstance will change its status from 'preparing' to undefined. If so,
     * after the waiting time the value of status will be found as undefined and
     * won´t perfom the upload for that file or any other that fits that condition.
     * Then, for each file sets the file in 'uploading' status.
     * Then onChange event will be called to update the files outside.
     * Then uploads the file with the `xhr` instance.
     * After that, that file recieves the new uploadStatus that can be
     *  'success', 'error' or 'aborted'
     * and onChange event will be called to update the files outside.
     * @param localFiles the list of extFiles to upload
     * @returns nothing
     */
    var uploadfiles = function (localFiles) { return __awaiter$1(void 0, void 0, void 0, function () {
        var arrOfExtFilesInstances, totalNumber, missingUpload, totalRejected, currentCountUpload, uploadingMessenger, newExtFileLocal, serverResponses, unifiedUpload, respo_1, err_1, i, currentExtFileInstance, uploadResponse, fakeProgress, uploadedFile, finishUploadMessenger;
        var _a;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0:
                    //set uploading flag to true
                    setIsUploading(true);
                    //avoid to call upload if not allowed
                    // flag is already true or there isnt files
                    //url was not provided
                    if (isUploading || localFiles.length === 0 || !shouldUpload) {
                        setIsUploading(false);
                        return [2 /*return*/];
                    }
                    if (localFiles.length === 0) {
                        setLocalMessage(DropzoneLocalizer.noFilesMessage);
                        setTimeout(function () {
                            setIsUploading(false);
                        }, 1500);
                        return [2 /*return*/];
                    }
                    arrOfExtFilesInstances = [];
                    totalNumber = localFiles.length;
                    missingUpload = localFiles.filter(function (extFile) {
                        return isUploadAbleExtFile(extFile, validateFilesFlag);
                    }).length;
                    totalRejected = 0;
                    currentCountUpload = 0;
                    uploadingMessenger = DropzoneLocalizer.uploadingMessage;
                    //no missing to upload
                    if (!(missingUpload > 0)) {
                        setTimeout(function () {
                            if (noMissingFilesLabel)
                                setLocalMessage(DropzoneLocalizer.noFilesMessage);
                            setIsUploading(false);
                        }, 1500);
                        return [2 /*return*/];
                    }
                    if (uploadProgressMessage)
                        setLocalMessage(uploadingMessenger("".concat(missingUpload, "/").concat(totalNumber)));
                    //  setIsUploading(true);
                    //PREPARING stage
                    onUploadStart === null || onUploadStart === void 0 ? void 0 : onUploadStart(localFiles);
                    arrOfExtFilesInstances =
                        ExtFileManager.setFileListMapPreparing(dropzoneId, localFiles, validateFilesFlag, cleanOnUpload) || [];
                    newExtFileLocal = __spreadArray$1([], arrOfExtFilesInstances, true).map(function (x) {
                        return x.toExtFile();
                    });
                    //CHANGE (o alejo el isUploading o lo alejo para que tenga m,as tiempo antes de la respuyesta)
                    // setIsUploading(true);
                    handleFilesChange(newExtFileLocal, true);
                    //AWAIT when preparing time is given
                    //general sleep for all files
                    return [4 /*yield*/, sleepPreparing(preparingTime)];
                case 1:
                    //AWAIT when preparing time is given
                    //general sleep for all files
                    _b.sent();
                    serverResponses = [];
                    if (!groupUpload) return [3 /*break*/, 6];
                    unifiedUpload = function (method, url, arrOfFiles) {
                        if (typeof method !== 'string' || typeof url !== 'string') {
                            return Promise.reject(new Error("Method or URL is invalid"));
                        }
                        arrOfExtFilesInstances.forEach(function (el) { return (el.uploadStatus = "uploading"); });
                        handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                        var formData = new FormData();
                        for (var i = 0; i < arrOfFiles.length; i++) {
                            var file = arrOfFiles[i].file;
                            if (file instanceof File) {
                                formData.append("files", file);
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            var xhr = new XMLHttpRequest();
                            xhr.withCredentials = withCredentials !== null && withCredentials !== void 0 ? withCredentials : false;
                            xhr.upload.onprogress = function (e) {
                                arrOfExtFilesInstances.forEach(function (el) {
                                    el.progress = (e.loaded / e.total) * 100;
                                });
                                handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                            };
                            xhr.responseType = "json";
                            xhr.onload = function () {
                                if (xhr.status >= 200 && xhr.status < 300) {
                                    console.log(xhr.response);
                                    console.log(typeof xhr.response);
                                    resolve(xhr.response);
                                }
                                else {
                                    reject(xhr.response);
                                }
                            };
                            xhr.onerror = function (err) {
                                reject(err);
                            };
                            xhr.open(method, url);
                            xhr.send(formData);
                        });
                    };
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    if (!url) {
                        throw new Error("Upload URL is not defined");
                    }
                    return [4 /*yield*/, unifiedUpload("POST", url, arrOfExtFilesInstances)];
                case 3:
                    respo_1 = _b.sent();
                    arrOfExtFilesInstances.forEach(function (el) { return (el.uploadStatus = "success"); });
                    arrOfExtFilesInstances.forEach(function (el) { return (el.uploadMessage = respo_1.message); });
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _b.sent();
                    arrOfExtFilesInstances.forEach(function (el) { return (el.uploadStatus = "error"); });
                    arrOfExtFilesInstances.forEach(function (el) { return (el.uploadMessage = err_1 instanceof Error ? err_1.message : 'Unknown error occurred'); });
                    console.log(err_1);
                    return [3 /*break*/, 5];
                case 5:
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    return [3 /*break*/, 21];
                case 6:
                    i = 0;
                    _b.label = 7;
                case 7:
                    if (!(i < arrOfExtFilesInstances.length)) return [3 /*break*/, 21];
                    currentExtFileInstance = arrOfExtFilesInstances[i];
                    if (!(currentExtFileInstance.uploadStatus === "preparing" &&
                        !((_a = currentExtFileInstance.extraData) === null || _a === void 0 ? void 0 : _a.deleted))) return [3 /*break*/, 19];
                    //set stage to "uploading" in one file and notify change
                    // PREPARING => UPLOADING
                    return [4 /*yield*/, sleepTransition()];
                case 8:
                    //set stage to "uploading" in one file and notify change
                    // PREPARING => UPLOADING
                    _b.sent();
                    instantPreparingToUploadOne(currentExtFileInstance);
                    //messge in footer
                    if (uploadProgressMessage)
                        setLocalMessage(uploadingMessenger("".concat(++currentCountUpload, "/").concat(missingUpload)));
                    //CHANGE FILES
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    uploadResponse = void 0;
                    if (!fakeUpload) return [3 /*break*/, 13];
                    return [4 /*yield*/, fakeFuiUpload(currentExtFileInstance, DropzoneLocalizer)];
                case 9:
                    uploadResponse = _b.sent();
                    fakeProgress = 0;
                    _b.label = 10;
                case 10:
                    if (!(fakeProgress < 100)) return [3 /*break*/, 12];
                    fakeProgress += getRandomInt(21, 35);
                    currentExtFileInstance.progress =
                        fakeProgress > 100 ? 100 : fakeProgress;
                    return [4 /*yield*/, sleepTransition(1000)];
                case 11:
                    _b.sent();
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    return [3 /*break*/, 10];
                case 12: return [3 /*break*/, 16];
                case 13:
                    _b.trys.push([13, 15, , 16]);
                    return [4 /*yield*/, uploadExtFile(currentExtFileInstance, url, urlFromExtFile, method, headers, uploadLabel, asBlob)];
                case 14:
                    uploadResponse = _b.sent();
                    return [3 /*break*/, 16];
                case 15:
                    _b.sent();
                    uploadResponse = unexpectedErrorUploadResult(currentExtFileInstance.toExtFile());
                    return [3 /*break*/, 16];
                case 16:
                    uploadedFile = uploadResponse;
                    //update instances
                    currentExtFileInstance.uploadStatus = uploadedFile.uploadStatus;
                    currentExtFileInstance.uploadMessage = uploadedFile.uploadMessage;
                    if (!!(currentExtFileInstance.uploadStatus === "aborted")) return [3 /*break*/, 18];
                    return [4 /*yield*/, sleepTransition()];
                case 17:
                    _b.sent();
                    _b.label = 18;
                case 18:
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    if (uploadedFile.uploadStatus === "error") {
                        totalRejected++;
                    }
                    serverResponses.push(uploadResponse);
                    return [3 /*break*/, 20];
                case 19:
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    _b.label = 20;
                case 20:
                    i++;
                    return [3 /*break*/, 7];
                case 21:
                    setLocalFiles(sanitizeArrExtFile(arrOfExtFilesInstances));
                    // upload group finished :D
                    onUploadFinish === null || onUploadFinish === void 0 ? void 0 : onUploadFinish(serverResponses);
                    finishUploadMessenger = DropzoneLocalizer.uploadFinished;
                    if (uploadResultMessage)
                        setLocalMessage(finishUploadMessenger(missingUpload - totalRejected, totalRejected));
                    setTimeout(function () {
                        setIsUploading(false);
                    }, 2000);
                    return [2 /*return*/];
            }
        });
    }); };
    // BEGIN SKOTE MOD: Assign the upload function to the global variable
    React__namespace.useEffect(function () {
        exports.DropzoneUploadFiles = function () { return uploadfiles(localFiles); };
    }, [localFiles]);
    // END SKOTE MOD
    var handleAbortUpload = function () {
        var listExtFileLocal = ExtFileManager.getExtFileInstanceList(dropzoneId);
        if (!listExtFileLocal)
            return;
        listExtFileLocal.forEach(function (extFileInstance) {
            if (extFileInstance.uploadStatus === "uploading" ||
                extFileInstance.uploadStatus === "preparing") {
                if (extFileInstance.xhr !== null && extFileInstance.xhr !== undefined)
                    extFileInstance.xhr.abort();
                extFileInstance.uploadStatus = "aborted";
                extFileInstance.uploadMessage = "Upload was aborted by user";
            }
        });
    };
    //the final className
    var _0 = useDropzoneClassName(dropzoneId, className, 
    //isDragging && Boolean(dropOnLayer),
    // header,
    // footer,
    color, 
    //style?.borderRadius || borderRadius,
    background, minHeight), dropzoneClassName = _0[0], headerClassName = _0[1], footerClassName = _0[2], disabledLayerClassName = _0[3];
    var dropLayerClassName = useDropLayerClassName(dropzoneId, color, 
    // isDragging,
    !onDragEnter && !onDragLeave);
    React__namespace.useEffect(function () {
        var localValidator = { maxFileSize: maxFileSize, accept: accept };
        var validatedFuiFileList = validateExtFileList(localFiles, maxFiles ? maxFiles - numberOfValidFiles : Infinity, localValidator, validator, maxFiles, localization);
        setLocalFiles(validatedFuiFileList);
        // eslint-disable-next-line
    }, [maxFileSize, accept, maxFiles, localization]);
    /**
     * Performs the changes in the extFile list.
     * Makes a new array of extFile according to the "behaviour" prop.
     * If isUploading state is not true and the behaviour props is equal to "add",
     * the incoming extFileList is added at the end of the current list of extFile.
     * Otherwise, the complete extFile list is replaced by the incomming extFile list
     * @param extFileList the new fileList
     * @param isUploading a flag that dscribes whther the uploading process is active or not
     */
    var handleFilesChange = function (extFileList, isUploading) {
        var finalExtFileList = behaviour === "add" && !isUploading
            ? __spreadArray$1(__spreadArray$1([], localFiles, true), extFileList, true) : __spreadArray$1([], extFileList, true);
        if (onChange) {
            onChange(finalExtFileList);
        }
        else {
            setLocalFiles(finalExtFileList);
        }
        if (autoUpload && !isUploading) {
            uploadfiles(finalExtFileList);
        }
    };
    /**
     * Performs the action of recieving the files when user selects the files
     * by clicking the InputButton
     * @param evt event handler for getting files from input element target
     */
    var handleChangeInput = function (evt) {
        //if (isUploading) return;
        var fileList = evt.target.files;
        var extFileListOutput = fileListToExtFileArray(fileList);
        //validate ext files
        if (validateFilesFlag) {
            extFileListOutput = outerFuiValidation(extFileListOutput);
            if (autoClean) {
                extFileListOutput = extFileListOutput.filter(function (f) { return f.valid; });
            }
        }
        //init xhr on each ext file
        if (shouldUpload)
            extFileListOutput = toUploadableExtFileList(extFileListOutput);
        // Clean input element to trigger onChange event on input
        cleanInput(inputRef.current);
        handleFilesChange(extFileListOutput);
    };
    /**
     * Performs the validation process for each FuiFile
     * outside the DropzoneNeo component file declaration
     * according to the criteria given by maxFiles and maxFileSize and accept props
     * This function calls validateFuiFileList and sets the valid prop of FuiFile to "true" or "false"
     * depending on the result of the individual validation.
     * It also add the list of errors.
     * @param fuiFileListToValidate the fuiFileList to validate
     * @returns a list of validated FuiFile list
     */
    var outerFuiValidation = function (fuiFileListToValidate) {
        var localValidator = { maxFileSize: maxFileSize, accept: accept };
        var finalNumberOfValids = numberOfValidFiles;
        if (behaviour === "replace") {
            //re-start number of valids
            finalNumberOfValids = 0;
        }
        var validatedFuiFileList = validateExtFileList(fuiFileListToValidate, maxFiles ? maxFiles - finalNumberOfValids : Infinity, localValidator, validator, maxFiles, localization);
        return validatedFuiFileList;
    };
    // HANDLERS for CLICK, DRAG NAD DROP
    function handleClick() {
        //handleClickUtil(evt);
        if (!clickable || disabled || isUploading)
            return;
        makeRipple();
        handleClickInput(inputRef.current);
    }
    var handleDragEnter = function (evt) {
        handleDragUtil(evt);
        if (disabled)
            return;
        setIsDragging(true);
        /* setTimeout(() => {
          setIsDragging((_isDragging) => {
            //if (_isDragging) {
              return false;
            //}
            //return true;
          });
        }, 2000); */
        //console.log("handleDragEnter");
    };
    var handleDragLeave = function (evt) {
        if (disabled)
            return;
        handleDragUtil(evt);
        setIsDragging(false);
    };
    // RIPPLE
    /**
     * Creates a ripple in the middle of the main container
     */
    var makeRipple = function () {
        createFuiRippleFromDiv(fuiRippleRefAbs.current, fuiRippleRefRel.current, color);
    };
    // KAMUI => RECIEIVE FILES FROM DROP OR INPUT( CLICK ), VALIDATE AND CHANGE
    /**
     * Performs the action of recieving the files when user drops the files
     * in the Dropzone container.
     * According to the given config from props, this function could
     * validate files and also start the uploading phase
     * @param evt even handler for getting files from dataTransfer
     */
    var kamui = function (evt) { return __awaiter$1(void 0, void 0, void 0, function () {
        var fileList, extFileListOutput;
        return __generator$1(this, function (_a) {
            handleDropUtil(evt);
            if (disabled)
                return [2 /*return*/];
            if (isUploading)
                return [2 /*return*/];
            if (!disableRipple)
                makeRipple();
            setIsDragging(false);
            fileList = evt.dataTransfer.files;
            extFileListOutput = fileListToExtFileArray(fileList);
            //validate extended files
            if (validateFilesFlag) {
                extFileListOutput = outerFuiValidation(extFileListOutput);
                if (autoClean) {
                    extFileListOutput = extFileListOutput.filter(function (f) { return f.valid; });
                }
            }
            //init xhr on each ext file
            if (shouldUpload)
                extFileListOutput = toUploadableExtFileList(extFileListOutput);
            handleFilesChange(extFileListOutput);
            return [2 /*return*/];
        });
    }); };
    /************* HEADER & FOOTER ******** */
    /**
     * reset the complete file list
     */
    var handleReset = function () {
        if (onChange) {
            onChange([]);
        }
        else {
            setLocalFiles([]);
        }
    };
    var handleClean = function () {
        if (onClean) {
            onClean();
        }
        else if (onChange) {
            onChange(localFiles.filter(function (f) { return f.valid; }));
        }
        else {
            setLocalFiles(localFiles.filter(function (f) { return f.valid; }));
        }
    };
    var finalDropzoneClassNameBorder = !dropzoneClassName
        ? undefined
        : (isDragging && dropOnLayer) || disabled
            ? addClassName(dropzoneClassName, "files-ui-root-border-hide")
            : dropzoneClassName;
    var finalDropzoneClassNameBorderClickable = !finalDropzoneClassNameBorder
        ? undefined
        : clickable && !disabled
            ? addClassName(finalDropzoneClassNameBorder, "clickable")
            : finalDropzoneClassNameBorder;
    if (!finalDropzoneClassNameBorderClickable)
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [actionButtonsPosition === "before" && (jsxRuntime.jsx(DropzoneButtons, { disabled: disabled, abortButton: isUploading ? abortButton : undefined, onAbort: handleAbortUpload, deleteButton: deleteButton, onDelete: !isUploading ? handleReset : undefined, uploadButton: !isUploading && !autoUpload ? uploadButton : undefined, onUpload: !autoUpload ? function () { return uploadfiles(localFiles); } : undefined, cleanButton: validateFilesFlag && !isUploading && !autoClean
                    ? cleanButton
                    : undefined, onClean: handleClean, style: containerStyle, className: containerClassName, top: true })), jsxRuntime.jsxs("div", __assign$1({ style: style, className: finalDropzoneClassNameBorderClickable }, rest, { onClick: handleClick, onDragOver: handleDragEnter, onDragLeave: !dropOnLayer ? handleDragLeave : undefined, onDrop: !dropOnLayer ? kamui : undefined }, { children: [!disableRipple && (jsxRuntime.jsx("div", __assign$1({ ref: fuiRippleRefAbs, className: "filesui-base-ripple-absolute", style: { borderRadius: style === null || style === void 0 ? void 0 : style.borderRadius } }, { children: jsxRuntime.jsx("div", { ref: fuiRippleRefRel, className: "filesui-base-ripple-relative" }) }))), jsxRuntime.jsx(React__namespace.Fragment, { children: header ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: customHeader ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: customHeader })) : (jsxRuntime.jsx(DropzoneHeader, { firstClassName: headerClassName, color: completeAsureColor(color), style: styleHeader, className: classNameHeader, resetStyles: resetStylesHeader, borderRadius: styleBorderRadius, isUploading: isUploading && uploadingIconHedaer, onReset: !isUploading && deleteFilesHeader ? handleReset : undefined, maxFileSize: maxFileSize && maxFileSizeHeader ? maxFileSize : undefined, maxFiles: maxFiles && validFilesCountHeader ? maxFiles : undefined, localization: localization, urlPresent: shouldUpload && uploadFilesHeader, onUploadStart: !autoUpload && !uploadButton
                                    ? function () { return uploadfiles(localFiles); }
                                    : undefined, numberOfValidFiles: numberOfValidFiles, 
                                //onClean={autoClean ? undefined : cleanButton ? undefined : onClean}
                                onClean: !cleanFilesHeader || isUploading || cleanButton || autoClean
                                    ? undefined
                                    : (cleanFiles || onClean) && validateFilesFlag
                                        ? handleClean
                                        : undefined })) })) : (jsxRuntime.jsx(jsxRuntime.Fragment, {})) }), jsxRuntime.jsx(DropzoneChildren, __assign$1({ label: label, localization: localization }, { children: children })), jsxRuntime.jsx(React__namespace.Fragment, { children: customFooter ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: customFooter })) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: footer && (jsxRuntime.jsx(DropzoneFooter, __assign$1({ firstClassName: footerClassName, borderRadius: styleBorderRadius, accept: accept, message: isUploading ? localMessage : undefined, localization: localization }, footerConfig))) })) }), dropOnLayer && (jsxRuntime.jsx(DropLayer, { open: isDragging, className: !isDragging
                            ? dropLayerClassName
                            : "".concat(dropLayerClassName, " dropzone-layer-drag"), onDragLeave: handleDragLeave, onDrop: kamui, style: { borderRadius: style === null || style === void 0 ? void 0 : style.borderRadius } })), jsxRuntime.jsx(InputHidden, { multiple: maxFiles ? maxFiles > 1 : true, accept: accept || "", inputRef: inputRef, onChange: handleChangeInput }), jsxRuntime.jsx(DropzoneDisabledLayer, { open: disabled, className: disabledLayerClassName })] })), actionButtonsPosition === "after" && (jsxRuntime.jsx(DropzoneButtons, { disabled: disabled, abortButton: isUploading ? abortButton : undefined, onAbort: handleAbortUpload, deleteButton: deleteButton, onDelete: !isUploading ? handleReset : undefined, uploadButton: !isUploading && !autoUpload ? uploadButton : undefined, onUpload: !autoUpload ? function () { return uploadfiles(localFiles); } : undefined, cleanButton: validateFilesFlag && !isUploading && !autoClean
                    ? cleanButton
                    : undefined, onClean: handleClean, style: containerStyle, className: containerClassName, top: false }))] }));
};

var defaultFileInputButtonProps = {
    textTransform: "uppercase",
    label: "browse...",
    behaviour: "add",
    disabled: false,
    uploadConfig: {},
    actionButtons: {},
    value: [],
};

var FileInputButton = function (props) {
    var _a = mergeProps(props, defaultFileInputButtonProps), 
    //basic
    _b = _a.value, 
    //basic
    value = _b === void 0 ? [] : _b, onChange = _a.onChange, 
    //validation
    accept = _a.accept, maxFileSize = _a.maxFileSize, maxFiles = _a.maxFiles, validator = _a.validator, 
    //cleanFiles,
    //onClean,
    autoClean = _a.autoClean, 
    //uploading
    uploadConfig = _a.uploadConfig, fakeUpload = _a.fakeUpload, onUploadStart = _a.onUploadStart, onUploadFinish = _a.onUploadFinish, 
    //styling
    //background,
    //minHeight,
    color = _a.color, style = _a.style, textColor = _a.textColor, textTransform = _a.textTransform, className = _a.className, 
    //label
    label = _a.label, 
    //localization
    locProps = _a.localization, 
    //ripple
    disableRipple = _a.disableRipple, 
    //action butotns
    actionButtons = _a.actionButtons, 
    //drop layer
    // dropOnLayer,
    //header and footer
    //header,
    //footer,
    //headerConfig = {},
    //footerConfig = {},
    //disabled
    disabled = _a.disabled, 
    //clickable,
    //add or replace
    behaviour = _a.behaviour, 
    //content
    children = _a.children, 
    //advancedConfig,
    variant = _a.variant, resetStyles = _a.resetStyles, darkModeProp = _a.darkMode, rest = __rest(_a, ["value", "onChange", "accept", "maxFileSize", "maxFiles", "validator", "autoClean", "uploadConfig", "fakeUpload", "onUploadStart", "onUploadFinish", "color", "style", "textColor", "textTransform", "className", "label", "localization", "disableRipple", "actionButtons", "disabled", "behaviour", "children", "variant", "resetStyles", "darkMode"]);
    //context
    var _c = React__namespace.useContext(FilesUiContext), darkModeContext = _c.darkMode, 
    //icons,
    locContext = _c.localization;
    var localization = locProps !== undefined ? locProps : locContext;
    var darkMode = darkModeProp !== undefined ? darkModeProp : darkModeContext;
    var _d = uploadConfig, url = _d.url, method = _d.method, headers = _d.headers, uploadLabel = _d.uploadLabel, _e = _d.cleanOnUpload, cleanOnUpload = _e === void 0 ? true : _e, _f = _d.preparingTime, preparingTime = _f === void 0 ? 1500 : _f, _g = _d.autoUpload, autoUpload = _g === void 0 ? false : _g, urlFromExtFile = _d.urlFromExtFile, _h = _d.asBlob, asBlob = _h === void 0 ? false : _h;
    var _j = actionButtons, actionButtonsPosition = _j.position, abortButton = _j.abortButton, deleteButton = _j.deleteButton, uploadButton = _j.uploadButton, cleanButton = _j.cleanButton, containerStyle = _j.style, containerClassName = _j.className;
    //localizers
    var DropzoneLocalizer = DropzoneLocalizerSelector(localization);
    //ref to the hidden input tag
    var inputRef = React__namespace.useRef(null);
    //state for checking upload start
    var _k = React__namespace.useState(false), isUploading = _k[0], setIsUploading = _k[1];
    //Id for uploding through FuiFileManager
    //const inputButtonId: string | number = React.useId();
    var inputButtonId = React__namespace.useMemo(function () { return FileIdGenerator.getNextId() + ""; }, []);
    //Flag that determines whether to validate or not
    var validateFilesFlag = isValidateActive(accept, maxFileSize, maxFiles, validator);
    //state for managing the number of valid files
    //state for managing the files locally
    var _l = useDropzoneFileListUpdater(inputButtonId, value || [], isUploading, maxFileSize, accept, maxFiles, validator, localization, validateFilesFlag), localFiles = _l[0], numberOfValidFiles = _l[1], setLocalFiles = _l[2];
    /**
     * Flag that determines if component should perform upload given url
     */
    var shouldUpload = isThereValidUrl(url, urlFromExtFile, localFiles);
    /**
     * Uploads each file in the array of ExtFiles
     * First, sets all the files in preparing status and awaits `preparingTime` miliseconds.
     * If `preparingTime` is not given or its value is false or 0, there won´t be a preparing phase.
     *        This is only for the first file, the rest of files will have preparing time until the file before was uploaded
     *        The first file will jump from undef to "uploading"
     * Then onChange event will be called to update the files outside.
     *
     * If `onCancel` event ocurrs outside on any on the
     * FileItems(e.g. by clicking the cancel button on `FileItem`),
     * the extFileInstance will change its status from 'preparing' to undefined. If so,
     * after the waiting time the value of status will be found as undefined and
     * won´t perfom the upload for that file or any other that fits that condition.
     * Then, for each file sets the file in 'uploading' status.
     * Then onChange event will be called to update the files outside.
     * Then uploads the file with the `xhr` instance.
     * After that, that file recieves the new uploadStatus that can be
     *  'success', 'error' or 'aborted'
     * and onChange event will be called to update the files outside.
     * @param localFiles the list of extFiles to upload
     * @returns nothing
     */
    var uploadfiles = function (localFiles) { return __awaiter$1(void 0, void 0, void 0, function () {
        var arrOfExtFilesInstances, missingUpload, newExtFileLocal, serverResponses, i, currentExtFileInstance, uploadResponse, fakeProgress, uploadedFile;
        var _a;
        return __generator$1(this, function (_b) {
            switch (_b.label) {
                case 0:
                    //set uploading flag to true
                    setIsUploading(true);
                    //avoid to call upload if not allowed
                    // flag is already true or there isnt files
                    //url was not provided
                    if (isUploading || localFiles.length === 0 || !shouldUpload) {
                        setIsUploading(false);
                        return [2 /*return*/];
                    }
                    if (localFiles.length === 0) {
                        setIsUploading(false);
                        return [2 /*return*/];
                    }
                    arrOfExtFilesInstances = [];
                    missingUpload = localFiles.filter(function (extFile) {
                        return isUploadAbleExtFile(extFile, validateFilesFlag);
                    }).length;
                    //console.log("upload start: missingUpload", missingUpload);
                    //no missing to upload
                    if (!(missingUpload > 0)) {
                        //console.log("upload start: noFilesMessage", missingUpload);
                        setIsUploading(false);
                        return [2 /*return*/];
                    }
                    //  setIsUploading(true);
                    //PREPARING stage
                    //console.log("validateFilesFlag", validateFilesFlag);
                    onUploadStart === null || onUploadStart === void 0 ? void 0 : onUploadStart(localFiles);
                    arrOfExtFilesInstances =
                        ExtFileManager.setFileListMapPreparing(inputButtonId, localFiles, validateFilesFlag, cleanOnUpload) || [];
                    newExtFileLocal = __spreadArray$1([], arrOfExtFilesInstances, true).map(function (x) {
                        return x.toExtFile();
                    });
                    //CHANGE (o alejo el isUploading o lo alejo para que tenga m,as tiempo antes de la respuyesta)
                    // setIsUploading(true);
                    handleFilesChange(newExtFileLocal, true);
                    //console.log("FileManagerLog before sleep", arrOfExtFilesInstances);
                    //AWAIT when preparing time is given
                    //general sleep for all files
                    return [4 /*yield*/, sleepPreparing(preparingTime)];
                case 1:
                    //console.log("FileManagerLog before sleep", arrOfExtFilesInstances);
                    //AWAIT when preparing time is given
                    //general sleep for all files
                    _b.sent();
                    serverResponses = [];
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < arrOfExtFilesInstances.length)) return [3 /*break*/, 16];
                    currentExtFileInstance = arrOfExtFilesInstances[i];
                    if (!(currentExtFileInstance.uploadStatus === "preparing" &&
                        !((_a = currentExtFileInstance.extraData) === null || _a === void 0 ? void 0 : _a.deleted))) return [3 /*break*/, 14];
                    //set stage to "uploading" in one file and notify change
                    // PREPARING => UPLOADING
                    return [4 /*yield*/, sleepTransition()];
                case 3:
                    //set stage to "uploading" in one file and notify change
                    // PREPARING => UPLOADING
                    _b.sent();
                    instantPreparingToUploadOne(currentExtFileInstance);
                    //CHANGE FILES
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    uploadResponse = void 0;
                    if (!fakeUpload) return [3 /*break*/, 8];
                    return [4 /*yield*/, fakeFuiUpload(currentExtFileInstance, DropzoneLocalizer)];
                case 4:
                    uploadResponse = _b.sent();
                    fakeProgress = 0;
                    _b.label = 5;
                case 5:
                    if (!(fakeProgress < 100)) return [3 /*break*/, 7];
                    fakeProgress += getRandomInt(21, 35);
                    currentExtFileInstance.progress =
                        fakeProgress > 100 ? 100 : fakeProgress;
                    return [4 /*yield*/, sleepTransition(1000)];
                case 6:
                    _b.sent();
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    return [3 /*break*/, 5];
                case 7: return [3 /*break*/, 11];
                case 8:
                    _b.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, uploadExtFile(currentExtFileInstance, url, urlFromExtFile, method, headers, uploadLabel, asBlob)];
                case 9:
                    uploadResponse = _b.sent();
                    return [3 /*break*/, 11];
                case 10:
                    _b.sent();
                    uploadResponse = unexpectedErrorUploadResult(currentExtFileInstance.toExtFile());
                    return [3 /*break*/, 11];
                case 11:
                    uploadedFile = uploadResponse;
                    //console.log("fake uploadResponse uploadedFile", uploadedFile);
                    //update instances
                    currentExtFileInstance.uploadStatus = uploadedFile.uploadStatus;
                    currentExtFileInstance.uploadMessage = uploadedFile.uploadMessage;
                    if (!!(currentExtFileInstance.uploadStatus === "aborted")) return [3 /*break*/, 13];
                    return [4 /*yield*/, sleepTransition()];
                case 12:
                    _b.sent();
                    _b.label = 13;
                case 13:
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    serverResponses.push(uploadResponse);
                    return [3 /*break*/, 15];
                case 14:
                    handleFilesChange(sanitizeArrExtFile(arrOfExtFilesInstances), true);
                    _b.label = 15;
                case 15:
                    i++;
                    return [3 /*break*/, 2];
                case 16:
                    setLocalFiles(sanitizeArrExtFile(arrOfExtFilesInstances));
                    // upload group finished :D
                    onUploadFinish === null || onUploadFinish === void 0 ? void 0 : onUploadFinish(serverResponses);
                    setIsUploading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAbortUpload = function () {
        var listExtFileLocal = ExtFileManager.getExtFileInstanceList(inputButtonId);
        //console.log("Aborting", listExtFileLocal, inputButtonId);
        if (!listExtFileLocal)
            return;
        listExtFileLocal.forEach(function (extFileInstance) {
            if (extFileInstance.uploadStatus === "uploading" ||
                extFileInstance.uploadStatus === "preparing") {
                if (extFileInstance.xhr !== null && extFileInstance.xhr !== undefined)
                    extFileInstance.xhr.abort();
                extFileInstance.uploadStatus = "aborted";
                extFileInstance.uploadMessage = "Upload was aborted by user";
            }
        });
    };
    React__namespace.useEffect(function () {
        var localValidator = { maxFileSize: maxFileSize, accept: accept };
        var validatedFuiFileList = validateExtFileList(localFiles, maxFiles ? maxFiles - numberOfValidFiles : Infinity, localValidator, validator, maxFiles, localization);
        setLocalFiles(validatedFuiFileList);
        // eslint-disable-next-line
    }, [maxFileSize, accept, maxFiles, localization]);
    /**
     * Performs the changes in the extFile list.
     * Makes a new array of extFile according to the "behaviour" prop.
     * If isUploading state is not true and the behaviour props is equal to "add",
     * the incoming extFileList is added at the end of the current list of extFile.
     * Otherwise, the complete extFile list is replaced by the incomming extFile list
     * @param extFileList the new fileList
     * @param isUploading a flag that dscribes whther the uploading process is active or not
     */
    var handleFilesChange = function (extFileList, isUploading) {
        var finalExtFileList = behaviour === "add" && !isUploading
            ? __spreadArray$1(__spreadArray$1([], localFiles, true), extFileList, true) : __spreadArray$1([], extFileList, true);
        if (onChange) {
            onChange(finalExtFileList);
        }
        else {
            setLocalFiles(finalExtFileList);
        }
        if (autoUpload && !isUploading) {
            //console.log("autoUpload", finalExtFileList);
            uploadfiles(finalExtFileList);
        }
    };
    /**
     * Performs the action of recieving the files when user selects the files
     * by clicking the InputButton
     * @param evt event handler for getting files from input element target
     */
    var handleChangeInput = function (evt) {
        //if (isUploading) return;
        var fileList = evt.target.files;
        var extFileListOutput = fileListToExtFileArray(fileList);
        //validate dui files
        if (validateFilesFlag) {
            extFileListOutput = outerFuiValidation(extFileListOutput);
            if (autoClean) {
                extFileListOutput = extFileListOutput.filter(function (f) { return f.valid; });
            }
        }
        //init xhr on each ext file
        if (shouldUpload)
            extFileListOutput = toUploadableExtFileList(extFileListOutput);
        // Clean input element to trigger onChange event on input
        cleanInput(inputRef.current);
        handleFilesChange(extFileListOutput);
    };
    /**
     * Performs the validation process for each FuiFile
     * outside the DropzoneNeo component file declaration
     * according to the criteria given by maxFiles and maxFileSize and accept props
     * This function calls validateFuiFileList and sets the valid prop of FuiFile to "true" or "false"
     * depending on the result of the individual validation.
     * It also add the list of errors.
     * @param fuiFileListToValidate the fuiFileList to validate
     * @returns a list of validated FuiFile list
     */
    var outerFuiValidation = function (fuiFileListToValidate) {
        var localValidator = { maxFileSize: maxFileSize, accept: accept };
        //console.log("validatedFuiFileList pre", fuiFileListToValidate);
        var finalNumberOfValids = numberOfValidFiles;
        if (behaviour === "replace") {
            //re-start number of valids
            finalNumberOfValids = 0;
        }
        var validatedFuiFileList = validateExtFileList(fuiFileListToValidate, maxFiles ? maxFiles - finalNumberOfValids : Infinity, localValidator, validator, maxFiles, localization);
        //console.log("validatedFuiFileList aft", validatedFuiFileList);
        return validatedFuiFileList;
    };
    // HANDLERS for CLICK
    function handleClick() {
        ////console.log("HAAAAAAAA");
        //handleClickUtil(evt);
        if (disabled)
            return;
        handleClickInput(inputRef.current);
    }
    /**
     * reset the complete file list
     */
    var handleReset = function () {
        if (onChange) {
            onChange([]);
        }
        else {
            setLocalFiles([]);
        }
    };
    var handleClean = function () {
        if (onChange) {
            onChange(localFiles.filter(function (f) { return f.valid; }));
        }
        else {
            setLocalFiles(localFiles.filter(function (f) { return f.valid; }));
        }
    };
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [actionButtonsPosition === "before" && (jsxRuntime.jsx(DropzoneButtons, { disabled: disabled, abortButton: isUploading ? abortButton : undefined, onAbort: handleAbortUpload, deleteButton: deleteButton, onDelete: !isUploading ? handleReset : undefined, uploadButton: !isUploading && !autoUpload ? uploadButton : undefined, onUpload: !autoUpload ? function () { return uploadfiles(localFiles); } : undefined, cleanButton: validateFilesFlag && !isUploading && !autoClean
                    ? cleanButton
                    : undefined, onClean: handleClean, style: containerStyle, className: containerClassName, top: true })), jsxRuntime.jsx(MaterialButton, __assign$1({ disabled: disabled, className: className, style: style, color: color, variant: variant, textTransform: textTransform, textColor: textColor, resetStyles: resetStyles, onClick: handleClick, disableRipple: disableRipple, darkMode: darkMode, id: inputButtonId }, rest, { children: children || label })), jsxRuntime.jsx(InputHidden, { multiple: maxFiles ? maxFiles > 1 : true, accept: accept || "", inputRef: inputRef, onChange: handleChangeInput }), actionButtonsPosition === "after" && (jsxRuntime.jsx(DropzoneButtons, { disabled: disabled, abortButton: isUploading ? abortButton : undefined, onAbort: handleAbortUpload, deleteButton: deleteButton, onDelete: !isUploading ? handleReset : undefined, uploadButton: !isUploading && !autoUpload ? uploadButton : undefined, onUpload: !autoUpload ? function () { return uploadfiles(localFiles); } : undefined, cleanButton: validateFilesFlag && !isUploading && !autoClean
                    ? cleanButton
                    : undefined, onClean: handleClean, style: containerStyle, className: containerClassName, top: false }))] }));
};

//React.HTMLProps<HTMLDivElement>
var defaultAvatarProps = {
    variant: "square",
    alt: "avatar",
    emptyLabel: "Agregar foto",
    changeLabel: "Cambiar foto",
    loadingLabel: "Loading...",
    readOnly: false,
    //smart: false,
    smartImgFit: "center",
};

___$insertStyle("@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);\n.fui-avatar-main-container {\n  width: 200px;\n  height: 200px;\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(128, 128, 128, 0.486);\n  border-radius: 10px;\n  font-family: \"Poppins\", sans-serif;\n}\n.fui-avatar-main-container.square {\n  border-radius: 0px;\n}\n.fui-avatar-main-container.circle {\n  border-radius: 50%;\n}\n.fui-avatar-main-container .fui-avatar-image {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.fui-avatar-main-container:hover .fui-avatar-label.hide {\n  display: flex;\n}\n.fui-avatar-main-container .fui-avatar-label {\n  margin: 0;\n  overflow: hidden;\n  background-color: rgba(128, 128, 128, 0.486);\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n}\n.fui-avatar-main-container .fui-avatar-label.hide {\n  display: none;\n}\n.fui-avatar-main-container .fui-avatar-label:hover {\n  background-color: rgba(71, 71, 71, 0.74);\n  display: flex;\n  cursor: pointer;\n}");

var useAvatarStyle = function (avatarId, borderRadius) {
    var _a = React__namespace.useState(""), idAvatarStyles = _a[0], setIdAvatarStyles = _a[1];
    var _b = React__namespace.useState(false), styleInjected = _b[0], setStyleInjected = _b[1];
    var _c = React__namespace.useState(undefined), classNameBorder = _c[0], setClassNameBorder = _c[1];
    //console.log("borderRadius",borderRadius);
    /**
     * creates a dynamic css sheet for avatar
     * @param borderRadius the border radius
     * @returns a dynamic css sheet
     */
    var makeDynamicAvatarCSSRules = function (avatarId, borderRadius) {
        var finalIdStyle = !borderRadius ? "-default" : "-".concat(avatarId);
        var styleSheet = DynamiCSS.makeStyleSheet({
            id: "fui-avatar-styles" + finalIdStyle,
            sheetRules: [
                {
                    className: "fui-avatar-border" + finalIdStyle,
                    rules: {
                        borderRadius: "".concat(borderRadius || "6px", " !important"),
                    }
                },
            ]
        });
        return styleSheet;
    };
    React__namespace.useEffect(function () {
        return function () {
            //console.log("avatar, deleting init", styleInjected, idAvatarStyles);
            if (styleInjected) {
                //console.log("avatar, catch css delete");
                DynamiCSS.removeStyleSheet(idAvatarStyles);
            }
            setIdAvatarStyles("");
            setStyleInjected(false);
        };
        // eslint-disable-next-line
    }, []);
    React__namespace.useEffect(function () {
        /*      if (!borderRadius) {
                 DynamiCSS.removeStyleSheet(idAvatarStyles);
                 return;
             } */
        var idStyle = "";
        var styleSheet = makeDynamicAvatarCSSRules(avatarId, borderRadius);
        //check if default is in DOM
        if (!borderRadius && !styleInjected) {
            if (DynamiCSS.existStyleSheet("fui-avatar-styles-default")) {
                setStyleInjected(true);
                setIdAvatarStyles("fui-avatar-styles-default");
            }
            else {
                idStyle = DynamiCSS.insertStyleSheet(styleSheet);
                setIdAvatarStyles(idStyle);
                if (idStyle !== "") {
                    setStyleInjected(true);
                }
            }
        }
        else if (!styleInjected) {
            // check if classname was added
            // if yes, edit css
            // if not insert css
            //console.log("avatar, no css, inserting");
            idStyle = DynamiCSS.insertStyleSheet(styleSheet);
            //console.log("avatar, no css, inserted OK", idStyle);
            setIdAvatarStyles(idStyle);
            if (idStyle !== "") {
                setStyleInjected(true);
            }
        }
        else {
            //console.log("avatar, catch css, modifiying", idAvatarStyles);
            DynamiCSS.editStyleSheet(idAvatarStyles, styleSheet.sheetRules || []);
        }
        setClassNameBorder("fui-avatar-border-" + avatarId);
        // eslint-disable-next-line
    }, [borderRadius]);
    return classNameBorder;
};

var BasePreparingLoader = function (props) {
    var size = props.size, color = props.color, 
    //colorFill,
    //onClick,
    style = props.style, 
    //className,
    radius = props.radius, x = props.x, y = props.y, width = props.width;
    var finalRadius = radius || 46;
    var finalX = x || 50;
    var finalY = y || 50;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    return (jsxRuntime.jsx("svg", __assign$1({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "".concat(finalSize, "px"), height: "".concat(finalSize, "px"), style: finalStyle, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, { children: jsxRuntime.jsx("circle", __assign$1({ cx: "".concat(finalX), cy: "".concat(finalY), r: "".concat(finalRadius), fill: "none", stroke: color || "#14ff00", strokeWidth: "".concat(width || 8, "px"), strokeDasharray: "164.93361431346415 100.97787143782138" }, { children: jsxRuntime.jsx("animateTransform", { attributeName: "transform", type: "rotate", repeatCount: "indefinite", dur: "1s", values: "0 ".concat(finalX, " ").concat(finalX, ";360 ").concat(finalX, " ").concat(finalX), keyTimes: "0;1" }) })) })));
};

___$insertStyle(".files-ui-loader-container {\n  background-color: rgba(0, 0, 0, 0.41);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.files-ui-loader-container.clickable {\n  cursor: pointer;\n}\n.files-ui-loader-container:hover {\n  background-color: rgba(0, 0, 0, 0.61);\n}");

var LoaderContainer = function (props) {
    var children = props.children, className = props.className, style = props.style, size = props.size, onClick = props.onClick;
    var finalSize = size ? parseSize(size) : undefined;
    //const isClickable = onClick !== undefined;
    var finalClassName = onClick
        ? "files-ui-loader-container clickable"
        : "files-ui-loader-container";
    var handleClick = function () {
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    return (jsxRuntime.jsx("div", __assign$1({ onClick: handleClick, className: className ? "".concat(finalClassName, " ").concat(className) : finalClassName, style: __assign$1(__assign$1({}, style), { height: finalSize, width: finalSize }) }, { children: children })));
};

var InfiniteLoader = function (props) {
    var onClick = props.onClick, 
    //text,
    size = props.size;
    return (jsxRuntime.jsx(LoaderContainer, __assign$1({ onClick: onClick, size: size }, { children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(BasePreparingLoader, { size: size }), jsxRuntime.jsx("div", __assign$1({ style: {
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    } }, { children: onClick && (jsxRuntime.jsx(Clear, { color: "rgba(255,255,255,0.75)", size: 45, onClick: onClick })) }))] }) })));
};

___$insertStyle(".files-ui-layer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}");

var Layer = function (props) {
    var style = props.style, className = props.className, children = props.children, visible = props.visible, otherProps = __rest(props, ["style", "className", "children", "visible"]);
    var finalClassName = addClassName(className || "", "files-ui-layer");
    if (visible)
        return (jsxRuntime.jsx("div", __assign$1({ className: finalClassName, style: style }, otherProps, { children: children })));
    else
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
};

var ImagePreviewDefaultProps = {
    //width: "100%",
    //height: "100%",
    alt: "image-preview",
    //className: "fui-image-preview"
    smartImgFit: "orientation"
};

___$insertStyle(".fui-image-preview {\n  position: relative;\n  border-radius: 10px;\n}");

var ImagePreview = function (props) {
    var _a = mergeProps(props, ImagePreviewDefaultProps), src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, onError = _a.onError, 
    //smart,
    smartImgFit = _a.smartImgFit, style = _a.style, className = _a.className;
    //console.log("ImagePreview smartImgFit",smartImgFit);
    var _b = React__namespace.useState([undefined, undefined]), _c = _b[0], finalHeight = _c[0], finalWidth = _c[1], setfinalDimensions = _b[1];
    ////console.table({ src, alt, className, style, width, height });
    var _d = React__namespace.useState(undefined), source = _d[0], setSource = _d[1];
    /*  const [orientation, setOrientation] = React.useState<
      "landscape" | "portrait" | undefined
    >(undefined); */
    var getSource = function (src) { return __awaiter$1(void 0, void 0, void 0, function () {
        var newImageSrc;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readAsDataURL(src)];
                case 1:
                    newImageSrc = _a.sent();
                    handleSetStrSource(newImageSrc);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleSetStrSource = function (imageSource) { return __awaiter$1(void 0, void 0, void 0, function () {
        var finalHeight, finalWidth, orientation_1;
        return __generator$1(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //console.log("handleSetStrSource", imageSource);
                    if (imageSource === "" || !imageSource) {
                        //console.log("handleSetStrSource return", imageSource);
                        return [2 /*return*/];
                    }
                    finalHeight = undefined;
                    finalWidth = undefined;
                    if (!!smartImgFit) return [3 /*break*/, 1];
                    //console.log("handleSetStrSource no imgfit", imageSource);
                    //if not given
                    finalWidth = "100%";
                    return [3 /*break*/, 4];
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, getImageOrientation(imageSource)];
                case 2:
                    orientation_1 = _a.sent();
                    //console.log("handleSetStrSource orientation obtained", orientation);
                    if (orientation_1 === "landscape") {
                        if (smartImgFit === "orientation") {
                            finalHeight = undefined;
                            finalWidth = "100%";
                        }
                        else {
                            finalHeight = "100%";
                            finalWidth = undefined;
                        }
                    }
                    else {
                        if (smartImgFit === "center") {
                            finalHeight = undefined;
                            finalWidth = "100%";
                        }
                        else {
                            finalHeight = "100%";
                            finalWidth = undefined;
                        }
                    }
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    onError === null || onError === void 0 ? void 0 : onError();
                    return [3 /*break*/, 4];
                case 4:
                    if (height)
                        finalHeight = height;
                    if (width)
                        finalWidth = width;
                    setfinalDimensions([finalHeight, finalWidth]);
                    setSource(imageSource);
                    return [2 /*return*/];
            }
        });
    }); };
    React__namespace.useEffect(function () {
        //if not undefined
        if (!src)
            return;
        ////console.log("ImagePreview There is source :D");
        if (typeof src === "string") {
            //if a url string is given, assign it directly
            handleSetStrSource(src);
        }
        else {
            //if a File object is given, check if is a supported format and read it
            var headerMime = src.type ? src.type.split("/")[0] : "octet";
            if (headerMime === "image") {
                //set the image source and create the uri string if it's a supported image format
                getSource(src);
                //if not image
            }
            else {
                onError === null || onError === void 0 ? void 0 : onError();
            }
        }
        // eslint-disable-next-line
    }, [src]);
    ////console.log("ImagePreview", src, source);
    /* const finalWidth: string | number | undefined =
      width || (orientation === "landscape" && smart ? "100%" : undefined);
    const finalHeight: string | number | undefined =
      height || (orientation === "portrait" && smart ? "100%" : undefined); */
    //console.log("Image result", src, source, finalHeight, finalWidth);
    var handleError = function (evt) {
        //console.log("handleError", onError);
        onError === null || onError === void 0 ? void 0 : onError();
    };
    return (jsxRuntime.jsx(React__namespace.Fragment, { children: src && source && (finalHeight || finalWidth) && (jsxRuntime.jsx("img", { 
            //onLoad={handleLoad}
            style: style || {}, onClick: function (evt) {
                evt.preventDefault();
            }, width: finalWidth, height: finalHeight, src: source, alt: alt, className: className, onError: handleError })) }));
};

/**
 *
 * Demos:
 *
 * - [Avatar](https://www.files-ui.com/components/avatar)
 *
 * API:
 *
 * - [Avatar API](https://www.files-ui.com/api/avatar/)
 */
var Avatar = function (props) {
    var _a = mergeProps(props, defaultAvatarProps), readOnly = _a.readOnly, src = _a.src, alt = _a.alt, accept = _a.accept, onChange = _a.onChange, emptyLabel = _a.emptyLabel, changeLabel = _a.changeLabel, variant = _a.variant, borderRadius = _a.borderRadius, uploadingLabel = _a.loadingLabel, isUloading = _a.isLoading, onError = _a.onError, smartImgFit = _a.smartImgFit, style = _a.style, rest = __rest(_a, ["readOnly", "src", "alt", "accept", "onChange", "emptyLabel", "changeLabel", "variant", "borderRadius", "loadingLabel", "isLoading", "onError", "smartImgFit", "style"]);
    //console.log("Avatar smartImgFit", smartImgFit);
    var inputRef = React__namespace.useRef(null);
    //const avatarId = React.useId();
    var avatarId = React__namespace.useMemo(function () { return FileIdGenerator.getNextId() + ""; }, []);
    var finalClassNameBorder = useAvatarStyle(avatarId.replace(":", "").replace(":", ""), borderRadius);
    //console.log("finalClassNameBorder", finalClassNameBorder);
    var handleClick = function () {
        var _a;
        // alert("Agregar fotooooooo");
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
    };
    var handleChangeInput = function (evt) {
        var fileList = evt.target.files;
        var fileListOutput = [];
        for (var i = 0, f = void 0; (f = fileList[i]); i++) {
            fileListOutput.push(f);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(fileListOutput[0]);
    };
    var handleError = function (evt) {
        //console.log("Avatar error", evt);
        onError === null || onError === void 0 ? void 0 : onError(evt);
    };
    if (!finalClassNameBorder)
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    else {
        return (jsxRuntime.jsx(React__namespace.Fragment, { children: jsxRuntime.jsxs("div", __assign$1({ className: "fui-avatar-main-container".concat(variant === "circle" ? " circle" : "", " ").concat(finalClassNameBorder), style: style }, rest, { children: [isUloading ? (jsxRuntime.jsx(Layer, __assign$1({ visible: true }, { children: jsxRuntime.jsxs("div", __assign$1({ className: "fui-avatar-label" }, { children: [jsxRuntime.jsx(InfiniteLoader, { size: 50 }), uploadingLabel] })) }))) : src ? (jsxRuntime.jsx(ImagePreview, { className: "fui-avatar-image", src: src, alt: alt, onError: handleError, smartImgFit: smartImgFit })) : (jsxRuntime.jsx("div", __assign$1({ className: "fui-avatar-label" }, { children: emptyLabel }))), !readOnly && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [!isUloading && (jsxRuntime.jsx("div", __assign$1({ className: "fui-avatar-label hide", onClick: handleClick }, { children: src ? changeLabel : emptyLabel }))), jsxRuntime.jsx(InputHidden, { multiple: false, accept: accept || "image/*", onChange: handleChangeInput, inputRef: inputRef })] }))] })) }));
    }
};

___$insertStyle("@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);\n.files-ui-file-card-main-container {\n  border-radius: 8px;\n  color: rgba(0, 0, 0, 0.858);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-height: 100px;\n  box-sizing: border-box;\n  position: relative;\n  font-size: 15px;\n  font-weight: 400;\n  width: 320px;\n  font-family: \"Poppins\", sans-serif;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container {\n  border-radius: 8px;\n  overflow: hidden;\n  width: 320px;\n  box-sizing: border-box;\n  height: 100px;\n  box-sizing: border-box;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: space-between;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 5px;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer {\n  box-sizing: border-box;\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer img {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer.blur img {\n  filter: blur(4px);\n  width: 200%;\n  height: 200%;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-status-layer {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-start;\n  padding: 5px;\n  box-sizing: border-box;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data {\n  padding-right: 10px;\n  box-sizing: border-box;\n  line-height: 19px;\n  font-weight: 500;\n  width: calc(100% - 100px);\n  word-break: break-all;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 100%;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data.dark-mode {\n  color: rgba(255, 255, 255, 0.7);\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-size {\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name {\n  font-size: 1rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1; /* number of lines to show */\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name.not-allowed {\n  background-color: rgba(180, 16, 16, 0.7);\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-upload-layer-container {\n  cursor: default;\n  display: flex;\n  box-sizing: border-box;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.625), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 1em;\n  position: relative;\n  overflow: hidden;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container {\n  cursor: default;\n  display: flex;\n  box-sizing: border-box;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 1em;\n  overflow: hidden;\n  align-items: center;\n  justify-content: flex-end;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info {\n  width: calc(100% - 100px);\n  height: 100px;\n  text-align: left;\n  scrollbar-width: thin;\n  overflow: auto;\n  scrollbar-color: rgba(100, 108, 127, 0.662745098) transparent;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar {\n  width: 9px;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-track {\n  background: transparent;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-thumb {\n  background-color: rgba(100, 108, 127, 0.662745098);\n  border-radius: 20px;\n  border: transparent;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .files-ui-file-card-info-layer-header {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  /*  position: absolute;\n  top: 5;\n  right: 5; */\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .heading {\n  font-weight: 600;\n  padding: 0 5px;\n}\n.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .label {\n  padding: 0 5px;\n  font-weight: 399;\n}\n.files-ui-file-card-main-container.clickable {\n  cursor: pointer;\n}\n\n/* .files-ui-file-icon {\n  font-size: 0.7rem;\n  min-width: 19px;\n  min-height: 19px;\n  margin: 0;\n  padding: 2px 2px;\n  border-radius: 50%;\n  background-color: rgba(32, 33, 36, 0.65);\n  word-break: break-word;\n  box-sizing: content-box;\n  &:hover {\n    background-color: rgba(32, 33, 36, 0.85);\n  }\n  &.dark-mode {\n    background-color: rgba(154, 160, 166, 0.65);\n    &:hover {\n      background-color: rgba(154, 160, 166, 0.85);\n    }\n  }\n} */");

___$insertStyle(".files-ui-file-icon {\n  font-size: 0.7rem;\n  min-width: 19px;\n  min-height: 19px;\n  margin: 0;\n  padding: 2px 2px;\n  border-radius: 50%;\n  background-color: rgba(32, 33, 36, 0.65);\n  word-break: break-word;\n  box-sizing: content-box;\n}\n.files-ui-file-icon:hover {\n  background-color: rgba(32, 33, 36, 0.85);\n}\n.files-ui-file-icon.dark-mode {\n  background-color: rgba(154, 160, 166, 0.65);\n}\n.files-ui-file-icon.dark-mode:hover {\n  background-color: rgba(154, 160, 166, 0.85);\n}");

___$insertStyle(".files-ui-file-card-main-container.dark-mode {\n  color: rgba(255, 255, 255, 0.7);\n  background-color: #121212;\n}\n.files-ui-file-card-main-container.dark-mode.elevation-0 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-1 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-2 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-3 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-4 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-5 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-6 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-7 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-8 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-9 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-10 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-11 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-12 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-13 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-14 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-15 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-16 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-17 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-18 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-19 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-20 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-21 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-22 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-23 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));\n}\n.files-ui-file-card-main-container.dark-mode.elevation-24 {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));\n}\n.files-ui-file-card-main-container.elevation-0 {\n  box-shadow: none;\n}\n.files-ui-file-card-main-container.elevation-1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.files-ui-file-card-main-container.elevation-24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}");

___$insertStyle(".file-card-right-layer-header {\n  margin-top: 3px;\n  margin-right: 3px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: unset;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2px;\n}\n\n.file-card-right-layer-footer {\n  margin-bottom: 3px;\n  margin-right: 3px;\n  left: unset;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2px;\n  bottom: 0;\n  right: 0;\n}");

var FileCardRightActions = function (props) {
    var darkMode = props.darkMode, deleteIcon = props.deleteIcon, downloadIcon = props.downloadIcon, imageIcon = props.imageIcon, infoIcon = props.infoIcon, onDelete = props.onDelete, onDownload = props.onDownload, onOpenInfo = props.onOpenInfo, onSee = props.onSee, onWatch = props.onWatch, videoIcon = props.videoIcon, isActive = props.isActive, visible = props.visible;
    if (visible)
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", __assign$1({ className: "file-card-right-layer-header" }, { children: isActive && deleteIcon && (jsxRuntime.jsx(Clear, { className: darkMode ? "files-ui-file-icon dark-mode" : "files-ui-file-icon", color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", onClick: onDelete, size: "small", colorFill: "transparent" })) })), jsxRuntime.jsx("div", __assign$1({ className: "file-card-right-layer-footer" }, { children: isActive && (jsxRuntime.jsxs(React__namespace.Fragment, { children: [imageIcon && (jsxRuntime.jsx(Visibility, { className: darkMode
                                    ? "files-ui-file-icon dark-mode"
                                    : "files-ui-file-icon", color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", onClick: onSee, size: "small" })), videoIcon && (jsxRuntime.jsx(PlayIcon, { className: darkMode
                                    ? "files-ui-file-icon dark-mode"
                                    : "files-ui-file-icon", color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", onClick: onWatch, size: "small" })), downloadIcon && (jsxRuntime.jsx(DownloadFile, { className: darkMode
                                    ? "files-ui-file-icon dark-mode"
                                    : "files-ui-file-icon", color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", onClick: onDownload, size: "small" })), infoIcon && (jsxRuntime.jsx(InfoDisney, { className: darkMode
                                    ? "files-ui-file-icon dark-mode"
                                    : "files-ui-file-icon", onClick: onOpenInfo, color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", size: "micro" }))] })) }))] }));
    return jsxRuntime.jsx(jsxRuntime.Fragment, {});
};

var FileCardInfoLayer = function (props) {
    var 
    //valid,
    localization = props.localization, onCloseInfo = props.onCloseInfo, 
    // uploadStatus,
    localName = props.localName, sizeFormatted = props.sizeFormatted, localType = props.localType;
    var FileItemLocalizer = FileItemLocalizerSelector(localization);
    var _a = FileItemLocalizer.fullInfoLayer, nameLabel = _a.name, sizeLabel = _a.size, typeLabel = _a.type;
    return (jsxRuntime.jsxs("div", __assign$1({ className: "file-card-file-info" }, { children: [jsxRuntime.jsx(Cancel, { style: { margin: 0, right: 5, top: 0, position: "absolute" }, color: "rgba(255,255,255,0.8)", onClick: onCloseInfo, colorFill: "black" }), jsxRuntime.jsx("div", __assign$1({ className: "heading" }, { children: nameLabel })), jsxRuntime.jsx("div", __assign$1({ className: "label" }, { children: localName })), jsxRuntime.jsx("div", __assign$1({ className: "heading" }, { children: sizeLabel })), jsxRuntime.jsx("div", __assign$1({ className: "label" }, { children: sizeFormatted })), jsxRuntime.jsx("div", __assign$1({ className: "heading" }, { children: typeLabel })), jsxRuntime.jsx("div", __assign$1({ className: "label" }, { children: localType }))] })));
};

var AbortedStatus = function (props) {
    var localization = props.localization, size = props.size;
    var FileItemStatusLocalizer = FileItemLocalizerSelector(localization).status;
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [jsxRuntime.jsx(DoDisturb, { color: "#f44336", size: size || 65 }), jsxRuntime.jsxs("span", { children: [" ", FileItemStatusLocalizer.aborted] })] }));
};

var EmptyStatus = function (props) {
    var height = props.height;
    var finalHeight = !height
        ? "132px"
        : typeof height === "number"
            ? "".concat(height, "px")
            : height;
    return (jsxRuntime.jsx(React__namespace.Fragment, { children: jsxRuntime.jsx("div", { style: { width: "100%", height: finalHeight } }) }));
};

var ErrorStatus = function (props) {
    var localization = props.localization, size = props.size;
    var FileItemStatusLocalizer = FileItemLocalizerSelector(localization).status;
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [jsxRuntime.jsx(Clear, { color: "rgba(255,255,255,0.4)", style: {
                    backgroundColor: "rgba(244, 67, 54, 0.8)",
                    borderRadius: "50%",
                }, size: size || 65 }), jsxRuntime.jsxs("span", { children: [" ", FileItemStatusLocalizer.error] })] }));
};

var PreparingStatus = function (props) {
    var onCancel = props.onCancel, localization = props.localization, size = props.size;
    var FileItemStatusLocalizer = FileItemLocalizerSelector(localization).status;
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [jsxRuntime.jsx(InfiniteLoader, { onClick: onCancel, size: size || 65 }), jsxRuntime.jsx("span", { children: FileItemStatusLocalizer.preparing })] }));
};

var SuccessStatus = function (props) {
    var localization = props.localization, size = props.size;
    var FileItemStatusLocalizer = FileItemLocalizerSelector(localization).status;
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [jsxRuntime.jsx(CheckCircle, { color: "#4caf50", size: size || 65 }), jsxRuntime.jsxs("span", { children: [" ", FileItemStatusLocalizer.success] })] }));
};

___$insertStyle("text.files-ui-text-dynamic-loader {\n  text-anchor: middle;\n  font-size: 1em;\n  fill: aliceblue;\n}");

var DynamicLoader = function (props) {
    var size = props.size, color = props.color, 
    //colorFill,
    //onClick,
    style = props.style, 
    //className,
    percentage = props.percentage, hidePerncentage = props.hidePerncentage, radius = props.radius, x = props.x, y = props.y, width = props.width, onClick = props.onClick;
    //console.table(props);
    ////console.log("percentage", percentage);
    var finalRadius = radius || 28;
    var finalX = x || 30;
    var finalY = y || 30;
    var finalSize = parseSize(size);
    var finalStyle = style ? style : {};
    var circleRef = React__namespace.useRef(null);
    function setProgress(percent, myCircle, circumference) {
        myCircle.style.strokeDashoffset = "".concat(circumference * (1 - percent / 100));
        //myCircle.style.strokeDashoffset = `0`;
        /* let pct = document.getElementById("pct");
        pct.innerHTML = percent.toFixed(0) + "%"; */
    }
    React__namespace.useEffect(function () {
        var myCircle = circleRef.current;
        //console.log("percentage useEffect", percentage);
        if (myCircle !== null &&
            myCircle !== undefined &&
            percentage !== undefined) {
            var circumference = 2 * Math.PI * myCircle.r.baseVal.value;
            myCircle.style.strokeDasharray = "".concat(circumference, " 1000");
            setProgress(percentage >= 100 ? 100 : percentage, myCircle, circumference);
        }
    }, [percentage]);
    if (percentage !== undefined)
        return (jsxRuntime.jsx(LoaderContainer, __assign$1({ size: size }, { children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("svg", __assign$1({ className: "dui_svg_circle_loader", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", width: "".concat(finalSize, "px"), height: "".concat(finalSize, "px"), style: finalStyle }, { children: [jsxRuntime.jsx("circle", { style: {
                                    transform: "rotate(-90deg)",
                                    transformOrigin: "center",
                                }, stroke: color || "#14ff00", cx: "".concat(finalX), cy: "".concat(finalY), r: "".concat(finalRadius), strokeWidth: "".concat(width || 8, "px"), 
                                //className="circle_loader"
                                id: "circle", ref: circleRef, fill: "none" }), !hidePerncentage && percentage !== undefined && (jsxRuntime.jsx("text", __assign$1({ className: "files-ui-text-dynamic-loader", x: "".concat(finalX), y: "".concat((finalX * 7) / 6) }, { children: "".concat(percentage.toFixed(0), " %") })))] })), onClick && (jsxRuntime.jsx("div", __assign$1({ style: {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        } }, { children: jsxRuntime.jsx(Clear, { color: "rgba(255,255,255,0.75)", size: 45, onClick: onClick }) })))] }) })));
    else {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
};

___$insertStyle(".lds-colorbar {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n}\n.lds-colorbar .files-ui-text-default-loader {\n  font-size: 1.5rem;\n  font-weight: 400;\n  text-anchor: middle;\n}");

var UploadingStatus = function (props) {
    var localization = props.localization, size = props.size, onAbort = props.onAbort, progress = props.progress;
    var FileItemStatusLocalizer = FileItemLocalizerSelector(localization).status;
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [progress !== undefined ? (jsxRuntime.jsx(DynamicLoader, { size: 70, x: 35, y: 35, radius: 32, percentage: progress, width: 6, hidePerncentage: progress === undefined || onAbort !== undefined, onClick: onAbort })) : (jsxRuntime.jsx(InfiniteLoader, { onClick: onAbort, size: size || 70 })), jsxRuntime.jsxs("span", { children: [" ", FileItemStatusLocalizer.uploading] })] }));
};

___$insertStyle(".files-ui-file-card-upload-layer {\n  width: 100px;\n  height: 100%;\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 1em;\n  position: relative;\n  overflow: hidden;\n}\n.files-ui-file-card-upload-layer .elevation-list-card {\n  transition: all 1.5s ease;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card span {\n  text-align: center;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2; /* number of lines to show */\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}");

var FileCardUploadLayer = function (props) {
    var uploadStatus = props.uploadStatus, onCancel = props.onCancel, onAbort = props.onAbort, progress = props.progress, localization = props.localization;
    var elevationContainerRef = React__namespace.useRef(null);
    var listContainerStoryRef = React__namespace.useRef(null);
    var _a = React__namespace.useState([undefined]), statusHistory = _a[0], setStatusHistory = _a[1];
    React__namespace.useEffect(function () {
        setStatusHistory(function (statusHistory) {
            if (statusHistory[statusHistory.length - 1] === "preparing" &&
                uploadStatus === "uploading") {
                var tempStatusHistory = __spreadArray$1([], statusHistory, true);
                tempStatusHistory[statusHistory.length - 1] = uploadStatus;
                //replace
                return __spreadArray$1([], tempStatusHistory, true);
            }
            return __spreadArray$1(__spreadArray$1([], statusHistory, true), [uploadStatus], false);
        });
    }, [uploadStatus]);
    var elevate = function () {
        var currentElevationContainer = elevationContainerRef.current;
        var currentElevationList = listContainerStoryRef.current;
        if (currentElevationContainer === null || currentElevationList === null)
            return;
        currentElevationList.style.top =
            0 - (statusHistory.length - 1) * 100 + "px";
    };
    React__namespace.useEffect(function () {
        if (statusHistory.length > 1)
            elevate();
        // eslint-disable-next-line
    }, [statusHistory.length]);
    return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-layer-container", ref: elevationContainerRef }, { children: jsxRuntime.jsx("div", __assign$1({ className: "elevation-list-card", ref: listContainerStoryRef }, { children: statusHistory.map(function (status, index) {
                switch (status) {
                    case "preparing":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item-card" }, { children: jsxRuntime.jsx(PreparingStatus, { onCancel: onCancel, localization: localization }) }), index + 1));
                    case "uploading":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item-card" }, { children: jsxRuntime.jsx(UploadingStatus, { onAbort: onAbort, progress: progress, localization: localization }) }), index + 1));
                    case "error":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item-card" }, { children: jsxRuntime.jsx(ErrorStatus, { size: 60, localization: localization }) }), index + 1));
                    case "success":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item-card" }, { children: jsxRuntime.jsx(SuccessStatus, { localization: localization }) }), index + 1));
                    case "aborted":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item-card" }, { children: jsxRuntime.jsx(AbortedStatus, { localization: localization }) }), index + 1));
                    default:
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item-card" }, { children: jsxRuntime.jsx(EmptyStatus, {}) }), index + 1));
                }
            }) })) })));
};

___$insertStyle(".files-ui-tooltip {\n  cursor: default;\n  position: relative;\n}\n.files-ui-tooltip:hover {\n  z-index: 2;\n}\n.files-ui-tooltip:hover .files-ui-tooltiptext {\n  visibility: visible;\n  opacity: 1;\n  z-index: 2;\n}\n.files-ui-tooltip.card:hover {\n  z-index: 2;\n}\n.files-ui-tooltip.card:hover .files-ui-tooltiptext {\n  visibility: visible;\n  opacity: 1;\n  z-index: 2;\n}\n.files-ui-tooltip.card .files-ui-tooltiptext {\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 400;\n  visibility: hidden;\n  width: 200px;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 2px 2px;\n  position: absolute;\n  z-index: 2;\n  left: calc(50% - 100px);\n  left: 0;\n  margin-top: 5px;\n  top: 100%;\n  opacity: 0;\n  transition: opacity 1s;\n}\n.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error {\n  background: linear-gradient(to top, #c62828, #d32f2f);\n}\n.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error::after {\n  border-color: transparent transparent #d32f2f transparent;\n}\n.files-ui-tooltip.card .files-ui-tooltiptext.success {\n  background: linear-gradient(to top, #1b5e20, #2e7d32);\n}\n.files-ui-tooltip.card .files-ui-tooltiptext.success::after {\n  border-color: transparent transparent #2e7d32 transparent;\n}\n.files-ui-tooltip.card .files-ui-tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n}\n.files-ui-tooltip .files-ui-tooltiptext {\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 0.8rem;\n  font-weight: 400;\n  visibility: hidden;\n  width: 132px;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 2px 2px;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  opacity: 0;\n  transition: opacity 1s;\n}\n.files-ui-tooltip .files-ui-tooltiptext.not-valid-error {\n  background: linear-gradient(to top, #c62828, #d32f2f);\n}\n.files-ui-tooltip .files-ui-tooltiptext.not-valid-error::after {\n  border-color: transparent transparent #d32f2f transparent;\n}\n.files-ui-tooltip .files-ui-tooltiptext.success {\n  background: linear-gradient(to top, #1b5e20, #2e7d32);\n}\n.files-ui-tooltip .files-ui-tooltiptext.success::after {\n  border-color: transparent transparent #2e7d32 transparent;\n}\n.files-ui-tooltip .files-ui-tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n}");

var Tooltip = function (props) {
    var 
    //message,
    //style,
    //children,
    //color,
    uploadStatus = props.uploadStatus, valid = props.valid, errors = props.errors, 
    //className,
    uploadMessage = props.uploadMessage, open = props.open;
    var _a = React__namespace.useState(undefined), statusClassName = _a[0], setSatusClassName = _a[1];
    var _b = React__namespace.useState(undefined), message = _b[0], setMessage = _b[1];
    var handleChangeStatus = function (uploadStatus, valid) {
        //higher priority
        if (uploadStatus !== undefined) {
            setMessage(uploadMessage);
            if (uploadStatus === "success") {
                setSatusClassName("success");
            }
            else {
                setSatusClassName("not-valid-error");
            }
        }
        else {
            if (valid !== undefined) {
                if (!valid) {
                    setSatusClassName("not-valid-error");
                    setMessage(errors
                        ? errors.reduce(function (acum, curr) {
                            acum += "".concat(curr, ". ");
                            return acum;
                        }, "")
                        : "");
                }
            }
        }
    };
    React__namespace.useEffect(function () {
        handleChangeStatus(uploadStatus, valid);
        // eslint-disable-next-line
    }, [uploadStatus, valid]);
    return (jsxRuntime.jsx(React__namespace.Fragment, { children: open && message && statusClassName && (jsxRuntime.jsx("span", __assign$1({ className: "files-ui-tooltiptext ".concat(statusClassName) }, { children: message }))) }));
};

var DownloadHidden = function (props) {
    var downloadUrl = props.downloadUrl, anchorRef = props.anchorRef, fileName = props.fileName;
    function handleClick(evt) {
        evt.stopPropagation();
    }
    if (downloadUrl)
        return (jsxRuntime.jsx("a", __assign$1({ ref: anchorRef, target: "_blank", href: downloadUrl, download: fileName, hidden: true, rel: "noopener noreferrer", onClick: handleClick }, { children: "download_file" })));
    return jsxRuntime.jsx(jsxRuntime.Fragment, {});
};

___$insertStyle("@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);\n.files-ui-file-mosaic-main-container {\n  width: 132px;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n  word-break: break-word;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container {\n  width: 132px;\n  height: 132px;\n  border-radius: 8px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer img {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer.blur img {\n  filter: blur(4px);\n  width: 200%;\n  height: 200%;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer {\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-right {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-grow: 1;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-left {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: flex-start;\n  justify-content: center;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer {\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: left;\n  scrollbar-width: thin;\n  line-height: 1.5;\n  letter-spacing: 0.02857em;\n  font-family: \"Poppins\", sans-serif;\n  width: inherit;\n  background-color: rgba(0, 0, 0, 0.85);\n  word-break: break-word;\n  height: 100%;\n  width: 100%;\n  font-size: 0.8rem;\n  transition: all 0.5s ease 0s;\n  overflow: auto;\n  color: white;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar {\n  width: 9px;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-track {\n  background: transparent;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-thumb {\n  background-color: rgba(100, 108, 127, 0.662745098);\n  border-radius: 20px;\n  border: transparent;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .files-ui-file-mosaic-info-layer-header {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .heading {\n  font-weight: 600;\n  padding: 0 5px;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .label {\n  padding: 0 5px;\n  font-weight: 399;\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name {\n  margin-top: 1px;\n  height: 31px;\n  text-align: center;\n  width: 100%;\n  color: black;\n  font-size: 0.95em;\n  box-sizing: border-box;\n  line-height: 15px;\n  font-weight: 400;\n  letter-spacing: 0.07rem;\n  word-break: break-all;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2; /* number of lines to show */\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  /*  display: flex;\n   align-items: center;\n   justify-content: center; */\n}\n.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name.dark-mode {\n  color: rgba(255, 255, 255, 0.7);\n}\n.files-ui-file-mosaic-main-container.clickable {\n  cursor: pointer;\n}\n\n/* .files-ui-file-icon {\n  font-size: 0.7rem;\n  min-width: 19px;\n  min-height: 19px;\n  margin: 0;\n  padding: 2px 2px;\n  border-radius: 50%;\n  background-color: rgba(32, 33, 36, 0.65);\n  word-break: break-word;\n  box-sizing: content-box;\n  &:hover {\n    background-color: rgba(32, 33, 36, 0.85);\n  }\n  &.dark-mode {\n    background-color: rgba(154, 160, 166, 0.65);\n    &:hover {\n      background-color: rgba(154, 160, 166, 0.85);\n    }\n  }\n}\n */");

___$insertStyle(".files-ui-layer-container {\n  position: relative;\n}");

var LayerContainer = function (props) {
    var style = props.style, className = props.className, children = props.children;
    var finalClassName = addClassName(className || "", "files-ui-layer-container");
    return (jsxRuntime.jsx("div", __assign$1({ className: finalClassName, style: style }, { children: children })));
};

var FileMosaicName = function (props) {
    var fileName = props.fileName;
    if (fileName)
        return jsxRuntime.jsx("span", { children: fileName });
    else {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
};

___$insertStyle(".files-ui-file-mosaic-upload-layer {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.65);\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 500;\n  font-size: 1em;\n  position: relative;\n  overflow: hidden;\n}\n.files-ui-file-mosaic-upload-layer .elevation-list {\n  transition: all 1.5s ease;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item {\n  width: 100%;\n  height: 132px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item span {\n  text-align: center;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2; /* number of lines to show */\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}");

var FileMosaicUploadLayer = function (props) {
    var uploadStatus = props.uploadStatus, onCancel = props.onCancel, onAbort = props.onAbort, progress = props.progress, localization = props.localization;
    //console.log("FileMosaicUploadLayer CHANGE progress", progress, uploadStatus);
    var elevationContainerRef = React__namespace.useRef(null);
    var listContainerStoryRef = React__namespace.useRef(null);
    var _a = React__namespace.useState([undefined]), statusHistory = _a[0], setStatusHistory = _a[1];
    React__namespace.useEffect(function () {
        setStatusHistory(function (statusHistory) {
            if (statusHistory[statusHistory.length - 1] === "preparing" &&
                uploadStatus === "uploading") {
                var tempStatusHistory = __spreadArray$1([], statusHistory, true);
                tempStatusHistory[statusHistory.length - 1] = uploadStatus;
                //replace
                return __spreadArray$1([], tempStatusHistory, true);
            }
            return __spreadArray$1(__spreadArray$1([], statusHistory, true), [uploadStatus], false);
        });
    }, [uploadStatus]);
    var elevate = function () {
        var currentElevationContainer = elevationContainerRef.current;
        var currentElevationList = listContainerStoryRef.current;
        if (currentElevationContainer === null || currentElevationList === null)
            return;
        currentElevationList.style.top =
            0 - (statusHistory.length - 1) * 132 + "px";
    };
    React__namespace.useEffect(function () {
        if (statusHistory.length > 1)
            elevate();
        // eslint-disable-next-line
    }, [statusHistory.length]);
    //default phase
    return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-layer-container", ref: elevationContainerRef }, { children: jsxRuntime.jsx("div", __assign$1({ className: "elevation-list", ref: listContainerStoryRef }, { children: statusHistory.map(function (status, index) {
                switch (status) {
                    case "preparing":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item" }, { children: jsxRuntime.jsx(PreparingStatus, { onCancel: onCancel, localization: localization }) }), index + 1));
                    case "uploading":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item" }, { children: jsxRuntime.jsx(UploadingStatus, { onAbort: onAbort, progress: progress, localization: localization }) }), index + 1));
                    case "error":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item" }, { children: jsxRuntime.jsx(ErrorStatus, { localization: localization }) }), index + 1));
                    case "success":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item" }, { children: jsxRuntime.jsx(SuccessStatus, { localization: localization }) }), index + 1));
                    case "aborted":
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item" }, { children: jsxRuntime.jsx(AbortedStatus, { localization: localization }) }), index + 1));
                    default:
                        return (jsxRuntime.jsx("div", __assign$1({ className: "elevation-item" }, { children: jsxRuntime.jsx(EmptyStatus, {}) }), index + 1));
                }
            }) })) })));
};

var FileMosaicImageLayer = function (props) {
    ////console.log("FileMosaicImageLayer", props);
    var imageSource = props.imageSource, url = props.url, fileName = props.fileName, card = props.card, isBlur = props.isBlur, smartImgFit = props.smartImgFit;
    var _a = React__namespace.useState(undefined), localSource = _a[0], setLocalSource = _a[1];
    var _b = React__namespace.useState(false), error = _b[0], setError = _b[1];
    //assign to localSource the imageSource or the url of the ile type
    React__namespace.useEffect(function () {
        setLocalSource(imageSource || url);
    }, [imageSource, url]);
    /**
     * When an error occurs when setting the source, the url will be used instead.
     * The url always is a valid image url
     */
    var handleError = function () {
        setError(true);
        setLocalSource(url);
        //console.log("FileMosaicImageLayer error", url);
    };
    //If blur is true
    if (isBlur) {
        return (jsxRuntime.jsx(React__namespace.Fragment, { children: !card && !error && imageSource && (jsxRuntime.jsx(ImagePreview, { src: localSource, alt: "blur ".concat(fileName), smartImgFit: false })) }));
    }
    return (jsxRuntime.jsx(React__namespace.Fragment, { children: jsxRuntime.jsx(ImagePreview, { onError: handleError, src: localSource, style: { borderRadius: "0px" }, alt: "preview ".concat(fileName), smartImgFit: smartImgFit }) }));
};

___$insertStyle(".files-ui-file-item-status-container {\n  text-align: center;\n  font-size: 0.8rem;\n  background-color: rgba(255, 255, 255, 0.8);\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  border-radius: 4px;\n  padding: 0.5px;\n  font-weight: 400;\n}\n.files-ui-file-item-status-container.file-status-error {\n  color: #f44336;\n}\n.files-ui-file-item-status-container.file-status-ok {\n  color: #5c7a1f;\n}\n.files-ui-file-item-status-container.file-status-loading {\n  position: relative;\n  display: flex;\n  color: #8b6b10;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.files-ui-file-item-status-container.file-status-loading.percentage {\n  padding: 7px 4px 2px 5px;\n}\n.files-ui-file-item-status-container.file-status-loading .abort-button {\n  position: absolute;\n  right: -2px;\n  top: -2px;\n}\n.files-ui-file-item-status-container.file-status-loading .uploading-text.up {\n  margin-bottom: -22px;\n}\n.files-ui-file-item-status-container.file-status-loading .uploading-text.down {\n  margin-top: -20px;\n}\n.files-ui-file-item-status-container.file-status-loading .uploading-text p.percentage {\n  font-weight: 500;\n}");

var FileMosaicStatus = function (props) {
    var valid = props.valid, uploadStatus = props.uploadStatus, localization = props.localization, style = props.style;
    var FileItemStatusLocalizer = FileItemLocalizerSelector(localization).status;
    if (uploadStatus === "success") {
        return (jsxRuntime.jsxs("div", __assign$1({ className: "files-ui-file-item-status-container file-status-ok", style: style }, { children: [jsxRuntime.jsx(CloudDone, { color: "#4caf50", size: "small", className: "status-icon" }), FileItemStatusLocalizer.success] })));
    }
    if (uploadStatus === "error" || uploadStatus === "aborted") {
        return (jsxRuntime.jsxs("div", __assign$1({ className: "files-ui-file-item-status-container file-status-error", style: style }, { children: [jsxRuntime.jsx(UploadError, { color: "#f44336", size: "semi-medium", className: "status-icon" }), FileItemStatusLocalizer.error] })));
    }
    if (valid !== undefined && valid !== null) {
        if (valid) {
            return (jsxRuntime.jsxs("div", __assign$1({ className: "files-ui-file-item-status-container file-status-ok", style: style }, { children: [jsxRuntime.jsx(CheckCircle, { color: "#4caf50", size: "small", className: "status-icon" }), FileItemStatusLocalizer.valid] })));
        }
        else {
            return (jsxRuntime.jsxs("div", __assign$1({ className: "files-ui-file-item-status-container file-status-error", style: style }, { children: [jsxRuntime.jsx(DoDisturb, { color: "#f44336", size: "small", className: "status-icon" }), FileItemStatusLocalizer.denied] })));
        }
    }
    return jsxRuntime.jsx(jsxRuntime.Fragment, {});
};

var FileMosaicInfoLayer = function (props) {
    var valid = props.valid, localization = props.localization, onCloseInfo = props.onCloseInfo, uploadStatus = props.uploadStatus, localName = props.localName, sizeFormatted = props.sizeFormatted, localType = props.localType;
    var FileItemLocalizer = FileItemLocalizerSelector(localization);
    var _a = FileItemLocalizer.fullInfoLayer, nameLabel = _a.name, sizeLabel = _a.size, typeLabel = _a.type;
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [jsxRuntime.jsxs("div", __assign$1({ className: "files-ui-file-mosaic-info-layer-header" }, { children: [jsxRuntime.jsx(Cancel
                    //style={{ margin: 0, right: 0, top: 0 }}
                    , { 
                        //style={{ margin: 0, right: 0, top: 0 }}
                        color: "rgba(255,255,255,0.8)", onClick: onCloseInfo, colorFill: "black" }), jsxRuntime.jsx(FileMosaicStatus, { valid: valid, uploadStatus: uploadStatus, localization: localization })] })), jsxRuntime.jsx("div", __assign$1({ className: "heading" }, { children: nameLabel })), jsxRuntime.jsx("div", __assign$1({ className: "label" }, { children: localName })), jsxRuntime.jsx("div", __assign$1({ className: "heading" }, { children: sizeLabel })), jsxRuntime.jsx("div", __assign$1({ className: "label" }, { children: sizeFormatted })), jsxRuntime.jsx("div", __assign$1({ className: "heading" }, { children: typeLabel })), jsxRuntime.jsx("div", __assign$1({ className: "label" }, { children: localType }))] }));
};

___$insertStyle(".filesui-file-item-size {\n  box-sizing: border-box;\n  font-size: 0.7rem;\n  border: 0.5px solid wheat;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.89);\n  padding: 2px 1.5px;\n  border-radius: 7px;\n  background-color: rgba(32, 33, 36, 0.75);\n  min-width: 45px;\n  word-break: break-word;\n  font-family: inherit;\n}\n.filesui-file-item-size:hover {\n  background-color: rgba(32, 33, 36, 0.85);\n  color: rgba(255, 255, 255, 0.97);\n}");

var FileMosaicSize = function (props) {
    var sizeFormatted = props.sizeFormatted;
    return (jsxRuntime.jsx(React__namespace.Fragment, { children: sizeFormatted && (jsxRuntime.jsx("div", __assign$1({ className: "filesui-file-item-size" }, { children: sizeFormatted }))) }));
};

var FileMosaicMainLayer = function (props) {
    var darkMode = props.darkMode, deleteIcon = props.deleteIcon, downloadIcon = props.downloadIcon, imageIcon = props.imageIcon, infoIcon = props.infoIcon, onDelete = props.onDelete, onDownload = props.onDownload, onOpenInfo = props.onOpenInfo, onSee = props.onSee, onWatch = props.onWatch, sizeFormatted = props.sizeFormatted, valid = props.valid, videoIcon = props.videoIcon, localization = props.localization, uploadStatus = props.uploadStatus, isActive = props.isActive;
    return (jsxRuntime.jsxs(React__namespace.Fragment, { children: [jsxRuntime.jsx("div", __assign$1({ className: "file-mosaic-main-layer-header" }, { children: isActive && deleteIcon && (jsxRuntime.jsx(Clear, { className: darkMode ? "files-ui-file-icon dark-mode" : "files-ui-file-icon", color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", onClick: onDelete, size: "small", colorFill: "transparent" })) })), jsxRuntime.jsxs("div", __assign$1({ className: "file-mosaic-main-layer-footer" }, { children: [jsxRuntime.jsxs("div", __assign$1({ className: "file-mosaic-footer-left" }, { children: [jsxRuntime.jsx(FileMosaicStatus, { valid: valid, uploadStatus: uploadStatus, localization: localization }), isActive && sizeFormatted && (jsxRuntime.jsx(FileMosaicSize, { sizeFormatted: sizeFormatted }))] })), jsxRuntime.jsx("div", __assign$1({ className: "file-mosaic-footer-right" }, { children: isActive && (jsxRuntime.jsxs(React__namespace.Fragment, { children: [imageIcon && (jsxRuntime.jsx(Visibility, { className: darkMode
                                        ? "files-ui-file-icon dark-mode"
                                        : "files-ui-file-icon", color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", onClick: onSee, size: "small" })), videoIcon && (jsxRuntime.jsx(PlayIcon, { className: darkMode
                                        ? "files-ui-file-icon dark-mode"
                                        : "files-ui-file-icon", color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", onClick: onWatch, size: "small" })), downloadIcon && (jsxRuntime.jsx(DownloadFile, { className: darkMode
                                        ? "files-ui-file-icon dark-mode"
                                        : "files-ui-file-icon", color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", onClick: onDownload, size: "small" })), infoIcon && (jsxRuntime.jsx(InfoDisney, { className: darkMode
                                        ? "files-ui-file-icon dark-mode"
                                        : "files-ui-file-icon", onClick: onOpenInfo, color: darkMode ? "#121212" : "rgba(255,255,255,0.851)", size: "micro" }))] })) }))] }))] }));
};

var FileMosaic = function (props) {
    var style = props.style, className = props.className, file = props.file, propName = props.name, propSize = props.size, propType = props.type, id = props.id, valid = props.valid, errors = props.errors, uploadStatus = props.uploadStatus, uploadMessage = props.uploadMessage, progress = props.progress, xhr = props.xhr, locProps = props.localization, preview = props.preview, imageUrl = props.imageUrl, videoUrl = props.videoUrl, info = props.info, _a = props.backgroundBlurImage, backgroundBlurImage = _a === void 0 ? true : _a, darkModeProp = props.darkMode, _b = props.alwaysActive, alwaysActive = _b === void 0 ? true : _b, _c = props.resultOnTooltip, resultOnTooltip = _c === void 0 ? true : _c, downloadUrl = props.downloadUrl, onDelete = props.onDelete, onCancel = props.onCancel, onAbort = props.onAbort, onDownload = props.onDownload, onSee = props.onSee, onWatch = props.onWatch, onDoubleClick = props.onDoubleClick, onClick = props.onClick, onRightClick = props.onRightClick, _d = props.smartImgFit, smartImgFit = _d === void 0 ? "orientation" : _d;
    //context
    var _e = React__namespace.useContext(FilesUiContext), darkModeContext = _e.darkMode, icons = _e.icons, locContext = _e.localization;
    var localization = locProps !== undefined ? locProps : locContext;
    var darkMode = darkModeProp !== undefined ? darkModeProp : darkModeContext;
    ////console.log("globalConfig", darkMode, icons);
    //localizers
    //ref for anchor download element
    var downloadRef = React__namespace.useRef(null);
    var finalClassName = addClassName(addClassName("files-ui-file-mosaic-main-container files-ui-tooltip", className), onClick ? "clickable" : undefined);
    var fileMosaicFileNameClassName = darkMode
        ? "files-ui-file-mosaic-file-name dark-mode"
        : "files-ui-file-mosaic-file-name";
    // local properties from file
    var _f = getLocalFileItemData(file, propName, propType, propSize), localName = _f[0], localType = _f[1], localSize = _f[2];
    // handle progress
    var localProgress = useProgress(progress, xhr);
    ////console.log("FileMosaic progress localProgress " + localProgress);
    //Initialize File Item
    var _g = useFileMosaicInitializer(file, propName, propType, valid, preview, imageUrl, videoUrl, icons), isReady = _g[0], isImage = _g[1], isVideo = _g[2], url = _g[3], imageSource = _g[4], videoSource = _g[5];
    //The size formatted and rounded in 2 decimals
    var sizeFormatted = fileSizeFormater(localSize);
    //alwaysActive
    var _h = React__namespace.useState(false), showInfo = _h[0], setShowInfo = _h[1];
    /********* ALWAYS ACTIVE LOGIC  ***************/
    //state for actionOnHover
    var _j = React__namespace.useState(false), hovering = _j[0], setHovering = _j[1];
    var handleOnHoverEnter = function () {
        if (alwaysActive)
            return;
        setHovering(true);
    };
    var handleOnHoverLeave = function () {
        if (alwaysActive)
            return;
        setHovering(false);
    };
    /***************** HANDLERS **********/
    //delete file item
    var handleDelete = function () { return onDelete === null || onDelete === void 0 ? void 0 : onDelete(id); };
    //open info layer
    var handleOpenInfo = function () { return setShowInfo(true); };
    //close info layer
    var handleCloseInfo = function () { return setShowInfo(false); };
    var isUploading = useIsUploading(uploadStatus);
    React__namespace.useEffect(function () {
        ////console.log("Change isUploading", isUploading);
        if (isUploading && showInfo) {
            handleCloseInfo();
        }
        // eslint-disable-next-line
    }, [isUploading]);
    /*************** CLICK ***************/
    /**
     * TO-DO: Add functionallity on click event
     * @param e event object
     */
    function handleClick(e) {
        //avoid children to trigger onClick ripple from parent
        e.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    }
    var handleDoubleClick = function (evt) {
        //alert("double click on file");
        evt.preventDefault();
        onDoubleClick === null || onDoubleClick === void 0 ? void 0 : onDoubleClick(evt);
    };
    function handleRightClick(evt) {
        // alert("right click!!!!");
        //get coordinates
        //zindex
        //create menu component
        // evt.preventDefault();
        onRightClick === null || onRightClick === void 0 ? void 0 : onRightClick(evt);
    }
    // DOWNLOAD FILE
    /**
     * onDownload, form 1
     * Trigger dowload directly performing a click on anchor element
     */
    var innerDownload = function () {
        var anchorElement = downloadRef.current;
        if (anchorElement) {
            anchorElement.click();
        }
    };
    /**
     * onDownlad, form 2
     * Handle the download triggering an outside event
     */
    var handleDownload = function () {
        if (onDownload) {
            onDownload === null || onDownload === void 0 ? void 0 : onDownload(id, downloadUrl);
        }
        else if (typeof downloadUrl == "string") {
            innerDownload();
        }
    };
    var handleAbort = function () {
        xhr === null || xhr === void 0 ? void 0 : xhr.abort();
        onAbort === null || onAbort === void 0 ? void 0 : onAbort(id);
    };
    if (isReady)
        return (jsxRuntime.jsxs("div", __assign$1({ className: finalClassName, style: style, onClick: handleClick, onMouseEnter: handleOnHoverEnter, onMouseLeave: handleOnHoverLeave, onDoubleClick: handleDoubleClick, onContextMenu: handleRightClick }, { children: [jsxRuntime.jsxs(LayerContainer, __assign$1({ className: "files-ui-file-mosaic-icon-layer-container", style: style }, { children: [jsxRuntime.jsx(Layer, __assign$1({ className: "files-ui-file-mosaic-image-layer blur", visible: backgroundBlurImage }, { children: jsxRuntime.jsx(FileMosaicImageLayer, { imageSource: imageSource, url: url, fileName: localName, isBlur: true, smartImgFit: false }) })), jsxRuntime.jsx(Layer, __assign$1({ className: "files-ui-file-mosaic-image-layer", visible: true }, { children: jsxRuntime.jsx(FileMosaicImageLayer, { imageSource: imageSource, url: url, fileName: localName, isBlur: false, smartImgFit: smartImgFit }) })), jsxRuntime.jsx(Layer, __assign$1({ className: "files-ui-file-mosaic-main-layer", visible: !isUploading && !showInfo }, { children: jsxRuntime.jsx(FileMosaicMainLayer, { deleteIcon: onDelete !== undefined, onDelete: handleDelete, darkMode: darkMode, valid: valid, uploadStatus: uploadStatus, localization: localization, sizeFormatted: sizeFormatted, imageIcon: isImage && onSee !== undefined, onSee: function () { return onSee === null || onSee === void 0 ? void 0 : onSee(imageSource); }, videoIcon: isVideo && onWatch !== undefined, onWatch: function () { return onWatch === null || onWatch === void 0 ? void 0 : onWatch(videoSource); }, downloadIcon: onDownload !== undefined || downloadUrl !== undefined, onDownload: handleDownload, infoIcon: info !== undefined, onOpenInfo: handleOpenInfo, isActive: alwaysActive || hovering }) })), jsxRuntime.jsx(Layer, __assign$1({ className: "files-ui-file-mosaic-info-layer", visible: showInfo, onClick: handleClickUtil }, { children: jsxRuntime.jsx(FileMosaicInfoLayer, { onCloseInfo: handleCloseInfo, valid: valid, localization: localization, localName: localName, sizeFormatted: sizeFormatted, localType: localType }) })), jsxRuntime.jsx(Layer, __assign$1({ className: "files-ui-file-mosaic-upload-layer", visible: isUploading, onClick: handleClickUtil }, { children: jsxRuntime.jsx(FileMosaicUploadLayer, { uploadStatus: uploadStatus, progress: localProgress, onCancel: onCancel ? function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(id); } : undefined, onAbort: onAbort ? handleAbort : undefined, localization: localization }) }))] })), jsxRuntime.jsx("div", __assign$1({ className: fileMosaicFileNameClassName }, { children: jsxRuntime.jsx(FileMosaicName, { fileName: localName }) })), jsxRuntime.jsx(Tooltip, { open: resultOnTooltip, uploadStatus: uploadStatus, valid: valid, errors: errors, uploadMessage: uploadMessage }), jsxRuntime.jsx(DownloadHidden, { fileName: localName, anchorRef: downloadRef, downloadUrl: downloadUrl })] })));
    return jsxRuntime.jsx(jsxRuntime.Fragment, {});
};

var setFinalElevation = function (elevation) {
    //  let finalElevation: number  = "";
    var finalElevation = Number(elevation);
    if (!isNaN(finalElevation)) {
        if (finalElevation > 24) {
            return 24;
        }
        else if (finalElevation < 0) {
            return 0;
        }
        else {
            return finalElevation;
        }
    }
    else {
        return 0;
    }
};
var makeFileCardClassName = function (elevation, darkMode, className, clickable) {
    //console.log("FileCard makeFileCardClassName", elevation, darkMode, className);
    var finalClassName = "files-ui-file-card-main-container files-ui-tooltip card";
    if (elevation) {
        finalClassName += " elevation-" + setFinalElevation(elevation);
    }
    if (darkMode) {
        finalClassName += " dark-mode";
    }
    if (clickable)
        finalClassName += " clickable";
    if (className) {
        finalClassName += " ".concat(className);
    }
    //console.log("FileCard finalClassName", finalClassName);
    return finalClassName;
};
var FileCard = function (props) {
    var style = props.style, className = props.className, file = props.file, propName = props.name, propSize = props.size, propType = props.type, id = props.id, valid = props.valid, errors = props.errors, uploadStatus = props.uploadStatus, uploadMessage = props.uploadMessage, progress = props.progress, xhr = props.xhr, locProps = props.localization, preview = props.preview, imageUrl = props.imageUrl, videoUrl = props.videoUrl, info = props.info, _a = props.backgroundBlurImage, backgroundBlurImage = _a === void 0 ? true : _a, darkModeProp = props.darkMode, _b = props.alwaysActive, alwaysActive = _b === void 0 ? true : _b, _c = props.resultOnTooltip, resultOnTooltip = _c === void 0 ? true : _c, downloadUrl = props.downloadUrl, onDelete = props.onDelete, onCancel = props.onCancel, onAbort = props.onAbort, onDownload = props.onDownload, onSee = props.onSee, onWatch = props.onWatch, onDoubleClick = props.onDoubleClick, onClick = props.onClick, onRightClick = props.onRightClick, _d = props.elevation, elevation = _d === void 0 ? 4 : _d, _e = props.smartImgFit, smartImgFit = _e === void 0 ? "orientation" : _e;
    //context
    var _f = React__namespace.useContext(FilesUiContext), darkModeContext = _f.darkMode, icons = _f.icons, locContext = _f.localization;
    var localization = locProps !== undefined ? locProps : locContext;
    var darkMode = darkModeProp !== undefined ? darkModeProp : darkModeContext;
    //console.log("globalConfig", darkMode, icons);
    //ref for anchor element
    var downloadRef = React__namespace.useRef(null);
    //className created
    var finalClassName = makeFileCardClassName(elevation, darkMode, className, onClick !== undefined);
    // local properties from file
    var _g = getLocalFileItemData(file, propName, propType, propSize), localName = _g[0], localType = _g[1], localSize = _g[2];
    // handle progress
    var localProgress = useProgress(progress, xhr);
    //Initialize File Item
    var _h = useFileMosaicInitializer(file, propName, propType, valid, preview, imageUrl, videoUrl, icons), isReady = _h[0], isImage = _h[1], isVideo = _h[2], url = _h[3], imageSource = _h[4], videoSource = _h[5];
    //The size formatted and rounded in 2 decimals
    var sizeFormatted = fileSizeFormater(localSize);
    //alwaysActive
    var _j = React__namespace.useState(false), showInfo = _j[0], setShowInfo = _j[1];
    /********* ALWAYS ACTIVE LOGIC  ***************/
    //state for actionOnHover
    var _k = React__namespace.useState(false), hovering = _k[0], setHovering = _k[1];
    var handleOnHoverEnter = function () {
        if (alwaysActive)
            return;
        setHovering(true);
    };
    var handleOnHoverLeave = function () {
        if (alwaysActive)
            return;
        setHovering(false);
    };
    /***************** HANDLERS **********/
    //delete file item
    var handleDelete = function () { return onDelete === null || onDelete === void 0 ? void 0 : onDelete(id); };
    //open info layer
    var handleOpenInfo = function () { return setShowInfo(true); };
    //close info layer
    var handleCloseInfo = function () { return setShowInfo(false); };
    var isUploading = useIsUploading(uploadStatus);
    React__namespace.useEffect(function () {
        ////console.log("Change isUploading", isUploading);
        if (isUploading && showInfo)
            handleCloseInfo();
        // eslint-disable-next-line
    }, [isUploading]);
    /*************** Click ***************/
    /**
     * TO-DO: Add functionallity on click event
     * @param e event object
     */
    function handleClick(e) {
        //avoid children to trigger onClick ripple from parent
        e.stopPropagation();
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    }
    var handleDoubleClick = function (evt) {
        //alert("double click on file");
        evt.preventDefault();
        onDoubleClick === null || onDoubleClick === void 0 ? void 0 : onDoubleClick(evt);
    };
    function handleRightClick(evt) {
        // alert("right click!!!!");
        //get coordinates
        //zindex
        //create menu component
        // evt.preventDefault();
        onRightClick === null || onRightClick === void 0 ? void 0 : onRightClick(evt);
    }
    // DOWNLOAD FILE
    /**
     * onDownload, form 1
     * Trigger dowload directly performing a click on anchor element
     */
    var innerDownload = function () {
        var anchorElement = downloadRef.current;
        if (anchorElement) {
            anchorElement.click();
        }
    };
    /**
     * onDownlad, form 2
     * Handle the download triggering an outside event
     */
    var handleDownload = function () {
        if (onDownload) {
            onDownload === null || onDownload === void 0 ? void 0 : onDownload(id, downloadUrl);
        }
        else if (typeof downloadUrl == "string") {
            innerDownload();
        }
    };
    var handleAbort = function () {
        xhr === null || xhr === void 0 ? void 0 : xhr.abort();
        onAbort === null || onAbort === void 0 ? void 0 : onAbort(id);
    };
    if (isReady) {
        return (jsxRuntime.jsxs("div", __assign$1({ className: finalClassName, style: style, onClick: handleClick, onMouseEnter: handleOnHoverEnter, onMouseLeave: handleOnHoverLeave, onDoubleClick: handleDoubleClick, onContextMenu: handleRightClick }, { children: [jsxRuntime.jsxs(LayerContainer, __assign$1({ className: "files-ui-file-card-main-layer-container" }, { children: [jsxRuntime.jsx(Layer, __assign$1({ className: "file-card-main-layer", visible: true }, { children: jsxRuntime.jsxs("div", __assign$1({ className: "file-card-icon-plus-data" }, { children: [jsxRuntime.jsx("div", __assign$1({ className: "file-card-icon-container" }, { children: jsxRuntime.jsxs(LayerContainer, __assign$1({ className: "file-card-icon-layer" }, { children: [jsxRuntime.jsx(Layer, __assign$1({ className: "file-card-icon-layer blur", visible: backgroundBlurImage }, { children: jsxRuntime.jsx(FileMosaicImageLayer, { imageSource: imageSource, fileName: localName, url: url, isBlur: true, smartImgFit: false }) })), jsxRuntime.jsx(Layer, __assign$1({ className: "file-card-icon-layer", visible: true }, { children: jsxRuntime.jsx(FileMosaicImageLayer, { imageSource: imageSource, url: url, fileName: localName, isBlur: false, smartImgFit: smartImgFit }) })), jsxRuntime.jsx(Layer, __assign$1({ className: "file-card-status-layer", visible: true }, { children: jsxRuntime.jsx(FileMosaicStatus, { valid: valid, uploadStatus: uploadStatus, localization: localization }) }))] })) })), jsxRuntime.jsxs("div", __assign$1({ className: darkMode ? "file-card-data dark-mode" : "file-card-data" }, { children: [jsxRuntime.jsx("div", __assign$1({ className: "file-card-name" }, { children: localName })), jsxRuntime.jsx("div", __assign$1({ className: "file-card-size" }, { children: sizeFormatted })), jsxRuntime.jsx("div", __assign$1({ className: "file-card-size" }, { children: shrinkWord(localType) }))] }))] })) })), jsxRuntime.jsx(Layer, __assign$1({ className: "file-card-info-layer-container", visible: showInfo, onClick: handleClickUtil }, { children: jsxRuntime.jsx(FileCardInfoLayer, { onCloseInfo: handleCloseInfo, valid: valid, localization: localization, localName: localName, sizeFormatted: sizeFormatted, localType: localType }) })), jsxRuntime.jsx(Layer, __assign$1({ className: "file-card-upload-layer-container", visible: isUploading, onClick: handleClickUtil }, { children: jsxRuntime.jsx("div", __assign$1({ className: "files-ui-file-card-upload-layer" }, { children: jsxRuntime.jsx(FileCardUploadLayer, { uploadStatus: uploadStatus, progress: localProgress, onCancel: onCancel ? function () { return onCancel === null || onCancel === void 0 ? void 0 : onCancel(id); } : undefined, onAbort: onAbort ? handleAbort : undefined, localization: localization }) })) }))] })), jsxRuntime.jsx(FileCardRightActions, { deleteIcon: onDelete !== undefined, onDelete: handleDelete, darkMode: darkMode, imageIcon: isImage && onSee !== undefined, onSee: function () { return onSee === null || onSee === void 0 ? void 0 : onSee(imageSource); }, videoIcon: isVideo && onWatch !== undefined, onWatch: function () { return onWatch === null || onWatch === void 0 ? void 0 : onWatch(videoSource); }, downloadIcon: onDownload !== undefined || downloadUrl !== undefined, onDownload: handleDownload, infoIcon: info !== undefined, onOpenInfo: handleOpenInfo, isActive: alwaysActive || hovering, visible: !isUploading && !showInfo }), jsxRuntime.jsx(Tooltip, { open: resultOnTooltip, uploadStatus: uploadStatus, valid: valid, errors: errors, uploadMessage: uploadMessage }), jsxRuntime.jsx(DownloadHidden, { fileName: localName, anchorRef: downloadRef, downloadUrl: downloadUrl })] })));
    }
    return jsxRuntime.jsx(jsxRuntime.Fragment, {});
};

___$insertStyle(".fui-fullscreen-container {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.734);\n  transform: translate(100%);\n  transition: transform 0.2s ease-in-out;\n  margin: 0 !important;\n  z-index: 4000;\n  box-sizing: border-box;\n}\n.fui-fullscreen-container.show-fs {\n  transform: translate(0);\n}\n\n.fui-fullscreen-relative-container {\n  position: relative;\n  width: 90%;\n  height: 90%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /*   @media (max-width: 600px) {\n    width: 80%;\n    height: auto;\n  }*/\n}\n.fui-fullscreen-relative-container img {\n  height: 100%;\n  width: auto;\n}\n.fui-fullscreen-relative-container video {\n  height: 100%;\n  width: auto;\n}\n@media (max-width: 960px) {\n  .fui-fullscreen-relative-container {\n    height: 90%;\n    width: 100%;\n  }\n  .fui-fullscreen-relative-container video {\n    height: auto;\n    width: 100%;\n  }\n  .fui-fullscreen-relative-container img {\n    height: auto;\n    width: 100%;\n  }\n}\n\n.button-full-screen {\n  position: absolute;\n  top: 0;\n  right: 0;\n}");

var FullScreen = function (props) {
    var open = props.open, onClose = props.onClose, children = props.children;
    function handleClose(e) {
        //avoid children to trigger onClick ripple from parent
        e.stopPropagation();
        onClose === null || onClose === void 0 ? void 0 : onClose();
    }
    React__namespace.useEffect(function () {
        var handleCloseEsc = function (evt) {
            if (evt.key === "Escape")
                onClose === null || onClose === void 0 ? void 0 : onClose();
        };
        //console.log("adding listener");
        document.addEventListener("keydown", handleCloseEsc);
        return function () {
            //console.log("removing listener");
            document.removeEventListener("keydown", handleCloseEsc);
        };
        // eslint-disable-next-line
    }, []);
    return (jsxRuntime.jsxs("div", __assign$1({ className: open ? "fui-fullscreen-container show-fs" : "fui-fullscreen-container", onClick: handleClose }, { children: [open && (jsxRuntime.jsx("div", __assign$1({ className: "fui-fullscreen-relative-container", onClick: handleClose }, { children: children }))), onClose && (jsxRuntime.jsx(Clear, { color: "rgba(255,255,255,0.8)", onClick: handleClose, colorFill: "transparent", className: "button-full-screen", size: "extra-large" }))] })));
};

var VideoPreview = function (props) {
    var videoSrc = props.src, 
    /* autoPlay, controls,  */
    style = props.style, className = props.className, others = __rest(props, ["src", "style", "className"]);
    var videoRef = React__namespace.useRef(null);
    var _a = React__namespace.useState(undefined), source = _a[0], setSource = _a[1];
    React__namespace.useEffect(function () {
        //if not undefined
        if (!videoSrc) {
            return;
        }
        if (typeof videoSrc === "string") {
            //if a url string is given, assign it directly
            setSource(videoSrc);
        }
        else {
            //if a File object is given, check if is a supported format
            var headerMime = videoSrc.type ? videoSrc.type.split("/")[0] : "octet";
            var tailMime = videoSrc.type ? videoSrc.type.split("/")[1] : "octet";
            if (headerMime === "video" && ["mp4", "ogg", "webm"].includes(tailMime)) {
                //set the video source and create the uri string if is a supported video format
                var newVideoSrc = URL.createObjectURL(videoSrc);
                setSource(newVideoSrc);
            }
        }
    }, [videoSrc]);
    React__namespace.useEffect(function () {
        if (source && videoRef.current) {
            videoRef.current.load();
        }
    }, [source]);
    return (jsxRuntime.jsx(React__namespace.Fragment, { children: videoSrc && source && (jsxRuntime.jsxs("video", __assign$1({ onClick: function (evt) {
                evt.preventDefault();
            }, 
            //onLoadedMetadata={handleLoaded}
            id: "files-ui-video", 
            //controls={controls}
            ref: videoRef, className: className || "filesui-video-preview", 
            //autoPlay={autoplay}
            src: source, 
            //width={"100%"}
            height: "100%", style: style }, others, { children: [jsxRuntime.jsx("source", { type: "video/webm" }), jsxRuntime.jsx("source", { type: "video/ogg" }), jsxRuntime.jsx("source", { type: "video/mp4" })] }))) }));
};

var FilesUiProvider = function (props) {
    var children = props.children, config = props.config;
    return (jsxRuntime.jsx(FilesUiContext.Provider, __assign$1({ value: config || {} }, { children: children })));
};

exports.ABORTED_ERROR_RESPONSE = ABORTED_ERROR_RESPONSE;
exports.Avatar = Avatar;
exports.Dropzone = Dropzone;
exports.DropzoneEnglish = DropzoneEnglish;
exports.DropzoneFrench = DropzoneFrench;
exports.DropzoneItalian = DropzoneItalian;
exports.DropzoneLocalizer = DropzoneLocalizer;
exports.DropzoneLocalizerSelector = DropzoneLocalizerSelector;
exports.DropzonePortuguese = DropzonePortuguese;
exports.DropzoneRussian = DropzoneRussian;
exports.DropzoneSimplifiedChinese = DropzoneSimplifiedChinese;
exports.DropzoneSpanish = DropzoneSpanish;
exports.DropzoneTraditionalChinese = DropzoneTraditionalChinese;
exports.ExtFileInstance = ExtFileInstance;
exports.FileCard = FileCard;
exports.FileIdGenerator = FileIdGenerator;
exports.FileInputButton = FileInputButton;
exports.FileItemEnglish = FileItemEnglish;
exports.FileItemFrench = FileItemFrench;
exports.FileItemItalian = FileItemItalian;
exports.FileItemLocalizer = FileItemLocalizer;
exports.FileItemLocalizerSelector = FileItemLocalizerSelector;
exports.FileItemPortuguese = FileItemPortuguese;
exports.FileItemRussian = FileItemRussian;
exports.FileItemSimplifiedChinese = FileItemSimplifiedChinese;
exports.FileItemSpanish = FileItemSpanish;
exports.FileItemTraditionalChinese = FileItemTraditionalChinese;
exports.FileMosaic = FileMosaic;
exports.FilesUiProvider = FilesUiProvider;
exports.FullScreen = FullScreen;
exports.ImagePreview = ImagePreview;
exports.JSON_PARSE_ERROR_RESPONSE = JSON_PARSE_ERROR_RESPONSE;
exports.JsonParseResponse = JsonParseResponse;
exports.MaterialButton = MaterialButton;
exports.NAMED_COLORS = NAMED_COLORS;
exports.NO_XHR_PROVIDED_ERROR = NO_XHR_PROVIDED_ERROR;
exports.SyntheticFile = SyntheticFile;
exports.TIMEOUT_ERROR_RESPONSE = TIMEOUT_ERROR_RESPONSE;
exports.UNEXPECTED_ERROR_RESPONSE = UNEXPECTED_ERROR_RESPONSE;
exports.ValidateErrorEnglish = ValidateErrorEnglish;
exports.ValidateErrorFrench = ValidateErrorFrench;
exports.ValidateErrorItalian = ValidateErrorItalian;
exports.ValidateErrorLocalizer = ValidateErrorLocalizer;
exports.ValidateErrorLocalizerSelector = ValidateErrorLocalizerSelector;
exports.ValidateErrorPortuguese = ValidateErrorPortuguese;
exports.ValidateErrorRussian = ValidateErrorRussian;
exports.ValidateErrorSimplifiedChinese = ValidateErrorSimplifiedChinese;
exports.ValidateErrorSpanish = ValidateErrorSpanish;
exports.ValidateErrorTraditionalChinese = ValidateErrorTraditionalChinese;
exports.VideoPreview = VideoPreview;
exports.aac = aac;
exports.abw = abw;
exports.accdb = accdb;
exports.addClassName = addClassName;
exports.addExtraData = addExtraData;
exports.addHeaders = addHeaders;
exports.asureColor = asureColor;
exports.cleanInput = cleanInput;
exports.colourNameToHex = colourNameToHex;
exports.completeAsureColor = completeAsureColor;
exports.completeUploadResult = completeUploadResult;
exports.createListOfMultiTypeFile = createListOfMultiTypeFile;
exports.createSyntheticFile = createSyntheticFile;
exports.createUploadConfig = createUploadConfig;
exports.darkerColor = darkerColor;
exports.extFileMock = extFileMock;
exports.extFileReconcilation = extFileReconcilation;
exports.fakeFuiUpload = fakeFuiUpload;
exports.fileListToExtFileArray = fileListToExtFileArray;
exports.fileListToExtFileInstanceArray = fileListToExtFileInstanceArray;
exports.fileListvalidator = fileListvalidator;
exports.fileSizeFormater = fileSizeFormater;
exports.getExt = getExt;
exports.getImageOrientation = getImageOrientation;
exports.getLocalFileItemData = getLocalFileItemData;
exports.getRandomInt = getRandomInt;
exports.getURLFileIco = getURLFileIco;
exports.getURLFileIcoFromNameAndType = getURLFileIcoFromNameAndType;
exports.hexColorToRGB = hexColorToRGB;
exports.hexTodec = hexTodec;
exports.instantPreparingToUploadOne = instantPreparingToUploadOne;
exports.isHexColor = isHexColor;
exports.isUploadAbleExtFile = isUploadAbleExtFile;
exports.isValidateActive = isValidateActive;
exports.makeErrorUploadResponse = makeErrorUploadResponse;
exports.makeServerResponse = makeServerResponse;
exports.makeSuccessUploadResponse = makeSuccessUploadResponse;
exports.makeSyntheticExtFile = makeSyntheticExtFile;
exports.prepToUploadOne = prepToUploadOne;
exports.preparingToUploadOne = preparingToUploadOne;
exports.readAsArrayBuffer = readAsArrayBuffer;
exports.readAsBinaryString = readAsBinaryString;
exports.readAsDataURL = readAsDataURL;
exports.readAsText = readAsText;
exports.resizeImage = resizeImage;
exports.sanitizeArrExtFile = sanitizeArrExtFile;
exports.separateAccept = separateAccept;
exports.setNextUploadStatus = setNextUploadStatus;
exports.setPrepToUploading = setPrepToUploading;
exports.shrinkWord = shrinkWord;
exports.sleepPreparing = sleepPreparing;
exports.sleepTransition = sleepTransition;
exports.toUploadableExtFileList = toUploadableExtFileList;
exports.unableToUploadResult = unableToUploadResult;
exports.unexpectedErrorUploadResult = unexpectedErrorUploadResult;
exports.uploadExtFile = uploadExtFile;
exports.uploadFile = uploadFile;
exports.uploadFormData = uploadFormData;
exports.uploadOne = uploadOne;
exports.uploadOneExtFile = uploadOneExtFile;
exports.useFakeProgress = useFakeProgress;
exports.validateAccept = validateAccept;
exports.validateExtFile = validateExtFile;
exports.validateExtFileList = validateExtFileList;
exports.validateFile = validateFile;
//# sourceMappingURL=index.js.map
