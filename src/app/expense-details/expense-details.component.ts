import { Component, OnInit } from '@angular/core';
import {Expense} from "../shared/expense";
import {ExpensesService} from "../services/expenses.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css']
})
export class ExpenseDetailsComponent implements OnInit {
  public details: Expense = {} as Expense;
   public id: number = {} as number;
  constructor(private list: ExpensesService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      // @ts-ignore
      this.id = params.get('id');
    });
  }
  getDetail(id: number): Expense{
    return this.details = this.list.loadExpense(id);
}

}
