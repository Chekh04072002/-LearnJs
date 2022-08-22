function _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('modall');
    modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay" data-close="true">
                <div class="modal-window" style="width: ${options.width || '600px'}">
                    <div class="modal-header">
                        <span class="modal-title">${options.title || 'Standard title'}</span>
                        ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                    </div>
                    <div class="modal-body">
                        ${options.content || ''}
                    </div>
                    <div class="modal-footer">
                        <button>Ok</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>`)
    document.body.appendChild(modal);
    return modal;
}

$.modal = function (options) {
    const ANIMATION_SPEED = 200;
    const $modal = _createModal(options);
    let closing = false;
    let destroyed = false;

    const modal = {
        open() {
            if (!closing) {
                if (destroyed) {
                    return console.log('Modal is destroyed');
                }
                $modal.classList.add('open')
            }
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hide');
            setTimeout(() => {
                $modal.classList.remove('hide');
                closing = false;
            }, ANIMATION_SPEED)
        }
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close();
        }
    }

    $modal.addEventListener('click', listener);

    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal);
            $modal.removeEventListener('click', listener);
            destroyed = true;
        }
    })
}

//Мы возвращаем только публичные методы, поэтому мы их возвращаем. Всё, что не публичное - мы не возвращаем