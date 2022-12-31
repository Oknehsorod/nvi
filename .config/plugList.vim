call plug#begin(stdpath('data') . '/plugged')

Plug 'bkad/CamelCaseMotion'
Plug 'preservim/nerdtree'
Plug 'easymotion/vim-easymotion'
Plug 'phaazon/hop.nvim'
Plug 'morhetz/gruvbox'
Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }
Plug 'junegunn/fzf.vim'

call plug#end()
