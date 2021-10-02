window.application.screens['settingsScreen'] = renderSettingsScreen
window.application.blocks['radioInputBlock'] = renderRadioInputBlock
window.application.blocks['inputLabelBlock'] = renderInputLabelBlock
window.application.blocks['legendBlock'] = renderLegendBlock
window.application.blocks['inputFormBlock'] = renderFormBlock
window.application.blocks['fieldSetBlock'] = renderFieldSetBlock

function renderLegendBlock(container) {
    const legend = document.createElement('legend')
    container.appendChild(legend)
    return legend
}

function renderRadioInputBlock(container) {
    const radiobox = document.createElement('input')
    radiobox.classList.add('radio')
    container.appendChild(radiobox)
    radiobox.type = 'radio';
    return radiobox
}

function renderInputLabelBlock(container) {
    const label = document.createElement('label')
    label.classList.add('input-label')
    container.appendChild(label)
    return label
}

function renderFieldSetBlock(container) {
    const fieldSet = document.createElement('fieldset')
    container.appendChild(fieldSet)
    return fieldSet
}

function renderFormBlock(container) {
    const form = document.createElement('form')
    form.classList.add('form')
    form.action = '#'
    container.appendChild(form)

    const fieldSetStyles = window.application.renderBlock('fieldSetBlock', form)
    const legendStyles = window.application.renderBlock('legendBlock', fieldSetStyles)
    legendStyles.textContent = 'Стили'

    const divStylesDefault = document.createElement('div')
    divStylesDefault.classList.add('form__control')
    const radioInputStylesDefault = window.application.renderBlock('radioInputBlock', divStylesDefault)
    radioInputStylesDefault.id = 'styles-default'
    radioInputStylesDefault.value = 'theme-default'
    const inputLabelStylesDefault = window.application.renderBlock('inputLabelBlock', divStylesDefault)
    inputLabelStylesDefault.htmlFor = 'styles-default'
    inputLabelStylesDefault.textContent = 'Основной'
    fieldSetStyles.appendChild(divStylesDefault)

    const divStylesDark = document.createElement('div')
    divStylesDark.classList.add('form__control')
    const radioInputStylesDark = window.application.renderBlock('radioInputBlock', divStylesDark)
    radioInputStylesDark.id = 'styles-dark'
    radioInputStylesDark.value = 'theme-dark'
    const inputLabelStylesDark = window.application.renderBlock('inputLabelBlock', divStylesDark)
    inputLabelStylesDark.htmlFor = 'styles-dark'
    inputLabelStylesDark.textContent = 'Темный'
    fieldSetStyles.appendChild(divStylesDark)
   
    const fieldSetNames = window.application.renderBlock('fieldSetBlock', form) 
    const legendNames = window.application.renderBlock('legendBlock', fieldSetNames)
    legendNames.textContent = 'Названия'

    const divNamesDefault = document.createElement('div')
    divNamesDefault.classList.add('form__control')
    const radioInputNamesDefault = window.application.renderBlock('radioInputBlock', divNamesDefault)
    radioInputNamesDefault.id = 'names-default'
    radioInputNamesDefault.value = 'names-default'
    const inputLabelNamesDefault = window.application.renderBlock('inputLabelBlock', divNamesDefault)
    inputLabelNamesDefault.htmlFor = 'names-default'
    inputLabelNamesDefault.innerHTML = 'Камень<br>Ножницы<br>Бумага'

    fieldSetNames.appendChild(divNamesDefault)

    const divNamesMagic = document.createElement('div')
    divNamesMagic.classList.add('form__control')
    const radioInputNamesMagic = window.application.renderBlock('radioInputBlock', divNamesMagic)
    radioInputNamesMagic.id = 'names-magic'
    radioInputNamesMagic.value = 'names-magic'
    const inputLabelNamesMagic = window.application.renderBlock('inputLabelBlock', divNamesMagic)
    inputLabelNamesMagic.htmlFor = 'names-magic'
    inputLabelNamesMagic.innerHTML = 'Принцесса<br>Рыцарь<br>Дракон'
    fieldSetNames.appendChild(divNamesMagic)
    
    const saveButton = window.application.renderBlock('button', form)
    saveButton.innerText = 'Сохранить'
    
    return form
}

function renderSettingsScreen() {
    const title = window.application.renderBlock('screenTitle', app)
    title.textContent = 'Настройки'

    const form = window.application.renderBlock('inputFormBlock', app)  
    const radioStyles = document.querySelector(`#${window.application.settings.styles}`)
    radioStyles.checked = true

    const radioNames = document.querySelector(`#${window.application.settings.names}`)
    radioNames.checked = true
}

//window.application.renderScreen('settingsScreen')
