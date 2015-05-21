import Ember from 'ember';
import layout from '../templates/components/ivy-tabs';

/**
 * @module ivy-tabs
 */

/**
 * @class IvyTabsComponent
 * @namespace IvyTabs
 * @extends Ember.Component
 */
export default Ember.Component.extend({
  classNames: ['ivy-tabs'],
  layout: layout,

  init: function() {
    this._super();
    this._initTabPanels();
  },

  /**
   * Set this to the index of the tab you'd like to be selected. Usually it is
   * bound to a controller property that is used as a query parameter, but can
   * be bound to anything.
   *
   * @property selected-index
   * @type Number
   * @default 0
   */
  'selected-index': 0,

  /**
   * Registers the `ivy-tab-list` instance.
   *
   * @method registerTabList
   * @param {IvyTabs.IvyTabListComponent} tabList
   */
  registerTabList: function(tabList) {
    this.set('ivy-tab-list', tabList);
    Ember.run.once(this, this._selectTabByIndex);
  },

  /**
   * Adds a panel to the `tabPanels` array.
   *
   * @method registerTabPanel
   * @param {IvyTabs.IvyTabPanelComponent} tabPanel
   */
  registerTabPanel: function(tabPanel) {
    this.get('tabPanels').pushObject(tabPanel);
  },

  /**
   * Removes the `ivy-tab-list` component.
   *
   * @method unregisterTabList
   * @param {IvyTabs.IvyTabListComponent} tabList
   */
  unregisterTabList: function(/* tabList */) {
    this.set('ivy-tab-list', null);
  },

  /**
   * Removes a panel from the `tabPanels` array.
   *
   * @method unregisterTabPanel
   * @param {IvyTabs.IvyTabPanelComponent} tabPanel
   */
  unregisterTabPanel: function(tabPanel) {
    this.get('tabPanels').removeObject(tabPanel);
  },

  _initTabPanels: function() {
    this.set('tabPanels', Ember.A());
  },

  _selectTabByIndex: function() {
    var selectedIndex = this.get('selected-index');
    if (Ember.isNone(selectedIndex)) { selectedIndex = 0; }
    this.get('ivy-tab-list').selectTabByIndex(selectedIndex);
  }
});
