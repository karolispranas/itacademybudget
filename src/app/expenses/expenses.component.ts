import { Component, OnInit } from '@angular/core';
import {ExpensesService} from "../services/expenses.service";
import {Expense} from "../shared/expense";

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  public expenseList: Expense[] = [];
  constructor(private list: ExpensesService) { }

  ngOnInit(): Expense[] {
    return this.expenseList = this.list.loadExpenses();
  }

}
